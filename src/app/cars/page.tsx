import { PrismaClient } from "@prisma/client";
import Image from "next/image";

const prisma = new PrismaClient();

export default async function Cars() {
	const cars = await prisma.car.findMany({
		include: { manufacturer: true }
	});

	if (!cars) {
		return <h1>No Cars Found</h1>;
	}

	return (
		<div className=" p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{cars.map((car) => (
				<a  key={car.id} href={`/cars/${car.id}`}>
					<div className="border-2  shadow-md p-4" key={car.id}>
						<Image
							height={500}
							width={500}
							src={car.images}
							alt={car.name}
							className="w-full h-40 object-cover rounded-lg mb-4"
						/>
						<h2 className="text-lg font-bold mb-2">{car.name}</h2>
						<h4 className="text-sm  mb-2">{car.manufacturer.name}</h4>
					</div>
				</a>
			))}
				</div>
	);
}
