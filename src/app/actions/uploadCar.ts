"use server";
import { PrismaClient } from "@prisma/client";
import { CarDetails } from "../uploadCar/page";

const prisma = new PrismaClient();

export async function uploadCar(details: CarDetails) {
  try {
    const manufacture = await prisma.manufacturer.findFirst({
      where: {
        name: details.carManufacturer,
      },
    });

    if (!manufacture) {
      throw new Error("Could not find the manufacturer");
    }

    await prisma.car.create({
      data: {
        name: details.carName,
        manufacturer: {
          connect: {
            id: manufacture.id,
          },
        },
        price: details.carPrice,
        manufactureYear: details.carManufactureYear,
        images: details.carImage,
      },
    });
  } catch (e) {
    console.error(e);
  }
}
