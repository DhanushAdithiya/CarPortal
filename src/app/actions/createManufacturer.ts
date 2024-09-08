"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createManufacturer(manufacture: string) {
  try {
    await prisma.manufacturer.create({
      data: {
        name: manufacture,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("Could not create a new manufacturer");
  }
}
