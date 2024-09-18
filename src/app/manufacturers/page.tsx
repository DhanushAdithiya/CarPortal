"use server";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function getManufacturers() {
	const manufacturers = await prisma.manufacturer.findMany({});
	return manufacturers;
}

export default async function Manufacturers() {
	const mans = await getManufacturers();
	if (!mans) {
		return <h1>No Manufacturers Found</h1>;
	}

	return (
		<>
			<h1 className="font-bold">Manufacturers</h1>
			<div className=" p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{mans.map((man) => (
					<a key={man.id} href={`/manufacturers/${man.id}`}>
						<div className="border-2  shadow-md p-4" key={man.id}>
							<Image
								height={500}
								width={500}
								src={man.logo}
								alt={man.name}
								className="w-full h-40 object-cover rounded-lg mb-4"
							/>
							<h2 className="text-lg font-bold mb-2">{man.name}</h2>
						</div>
					</a>
				))}
			</div>
		</>
	);
}
