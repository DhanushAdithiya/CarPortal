"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function LoginUser(
  username: string,
  password: string
): Promise<string> {
  const customer = await prisma.customer.findFirstOrThrow({
    where: {
      name: username,
      password: password,
    },
  });

  if (!customer) {
    throw new Error("Could not find user");
  }

  return customer.id.toString();
}
