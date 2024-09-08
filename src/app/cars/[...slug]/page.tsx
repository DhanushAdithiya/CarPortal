import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function Cars({ params }: { params: { slug: string[] } }) {
  const car = await prisma.car.findUnique({
    where: { id: Number(params.slug[0]) },
  });
  console.log(car);

  return <h1>Car Page {params.slug}</h1>;
}
