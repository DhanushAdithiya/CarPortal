"use server";

import { PrismaClient } from "@prisma/client";
import { PurchaseDetails } from "../purchase/[...slug]/page";

const prisma = new PrismaClient();

export async function buyCar(
  customerId: number,
  carId: number,
  purchaseDetails: PurchaseDetails // Changed to camelCase
) {
  const user = await prisma.customer.findUnique({ where: { id: customerId } });
  if (!user) {
    console.error("User not found");
    throw new Error("Could not find user");
  }

  const car = await prisma.car.findUnique({ where: { id: carId } });
  if (!car) {
    console.error("Could not find the car");
    throw new Error("Could not find Car");
  }

  try {
    const saleDetail = await prisma.sale.create({
      data: {
        carId: carId,
        customerId,
        salePrice: car.price,
        saleDate: new Date(),
      },
    });

    await prisma.customer.update({
      where: { id: customerId },
      data: {
        purchases: {
          push: saleDetail.id,
        },
      },
    });

    prisma.car.update({
      where: {
        id: carId,
      },
      data: {
        sale: { push: saleDetail.id },
      },
    });
  } catch (error) {
    console.error("Error creating sale:", error);
    throw new Error("Could not complete the purchase");
  }
}
