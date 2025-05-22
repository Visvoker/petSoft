"use client";

import { Pet } from "@/lib/type";
import { createContext, useState } from "react";

type PetContextProviderProps = {
  data: Pet[];
  children: React.ReactNode;
};

type TPetContext = {
  pets: Pet[];
  selectPetId: string | null;
};

export const PetContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({
  children,
  data,
}: PetContextProviderProps) {
  const [pets, setPets] = useState(data);
  const [selectPetId, setSelectPetId] = useState(null);

  return (
    <PetContext.Provider value={{ pets, selectPetId }}>
      {children}
    </PetContext.Provider>
  );
}
