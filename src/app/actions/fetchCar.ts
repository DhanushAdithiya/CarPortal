"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function fetchCar(id: string) {
  const car = await prisma.car
    .findUnique({
      where: { id: Number(id) },
      include: { manufacturer: true },
    })
    .catch();

  return car;
}
