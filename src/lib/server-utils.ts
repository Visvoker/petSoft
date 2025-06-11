import "server-only";

import { auth } from "./auth";
import { redirect } from "next/navigation";
import { Pet, User } from "@prisma/client";
import prisma from "./db";

export async function checkAuth() {
  const section = await auth();

  if (!section?.user) {
    redirect("/login");
  }
  return section;
}

export async function getUserByEmail(email: User["email"]) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
}

export async function getPetById(petId: Pet["id"]) {
  const pet = await prisma.pet.findUnique({
    where: {
      id: petId,
    },
  });
  return pet;
}

export async function getPetsByUserId(userId: User["id"]) {
  const pets = await prisma.pet.findMany({
    where: {
      userId,
    },
  });
  return pets;
}
