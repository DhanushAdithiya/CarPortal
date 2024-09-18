"use server"

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getMan(carId: number) {
	const man = await prisma.manufacturer.findUnique({
		where: {
			id: carId,
		},
	});

	if (!man) {
		throw new Error("Manufacturer not found");
	}

	// Extract car details from purchases
	let cars: any[] = await Promise.all(
		man.cars.map(async (carId) => {
			const car = await prisma.car.findUnique({ where: { id: carId } });
			if (car) {
				return car; // Return the car object
			}
			return null; // Return null if no sale found
		}),
	);

	// Filter out any null values (in case some purchases didn't have associated sales)
	cars = cars.filter((car) => car !== null);

	console.log(cars); // Now this will log the populated cars array

	return {
		name: man.name,
		cars: cars || [],
	};
}
