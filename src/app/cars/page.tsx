import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Cars() {
  const cars = await prisma.car.findMany();

  if (!cars) {
    return <h1>No Cars Found</h1>;
  }

  console.log();
  return (
    <div>
      {cars.map((car) => (
        <a key={car.id} href={`cars/${car.id}`}>
          {car.name}
        </a>
      ))}
    </div>
  );
}
