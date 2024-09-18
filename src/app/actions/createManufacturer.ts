"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createManufacturer(manufacture: string, logo: string) {
	console.log(logo)
  try {
    await prisma.manufacturer.create({
      data: {
        name: manufacture,
				logo: logo
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("Could not create a new manufacturer");
  }
}
