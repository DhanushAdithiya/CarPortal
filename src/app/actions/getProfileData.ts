"use server";
//
// actions/getProfileData.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUserData(userId: string) {
	const user = await prisma.customer.findUnique({
		where: { id: Number(userId) },
		include: {
			Purchase: {
				include: {
					car: true, // Include car details in the purchase
				},
			},
		},
	});

	if (!user) {
		throw new Error("User not found");
	}

	// Extract car details from purchases
	let cars: any[] = await Promise.all(
		user.purchases.map(async (purchaseId) => {
			const sale = await prisma.sale.findUnique({ where: { id: purchaseId } });
			if (sale) {
				const car = await prisma.car.findUnique({ where: { id: sale.carId },include: {manufacturer: true} });
				return car; // Return the car object
			}
			return null; // Return null if no sale found
		}),
	);

	// Filter out any null values (in case some purchases didn't have associated sales)
	cars = cars.filter((car) => car !== null);

	console.log(cars); // Now this will log the populated cars array

	return {
		name: user.name,
		email: user.email,
		cars: cars || [],
	};
}
