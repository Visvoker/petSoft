"use client"

import { usePetContext } from "@/lib/hook";
import React from "react";

export default function Stats() {
  const { numberOfPets } = usePetContext();
  return (
    <section className="text-center">
      <p className="font-bold text-2xl leading-6">{numberOfPets}</p>
      <p className="opacity-80">current guests</p>
    </section>
  );
}
