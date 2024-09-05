"use server";

import { PrismaClient } from "@prisma/client";
import { User } from "../createAccount/page";
const prisma = new PrismaClient();

export default async function createUser(user: User) {
  try {
    await prisma.customer.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error("User creation failed"); // Throw an error for better error handling
  }
}
