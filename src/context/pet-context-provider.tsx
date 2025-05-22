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
  selectedPet: Pet | undefined;
  handleChangeSelectedPetId: (id: string) => void;
};

export const PetContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({
  children,
  data,
}: PetContextProviderProps) {
  // state
  const [pets, setPets] = useState(data);
  const [selectPetId, setSelectPetId] = useState<string | null>(null);

  // derived state
  const selectedPet = pets.find((pet) => pet.id === selectPetId);

  // event handlers / actions
  const handleChangeSelectedPetId = (id: string) => {
    setSelectPetId(id);
  };

  return (
    <PetContext.Provider
      value={{ pets, selectPetId, selectedPet, handleChangeSelectedPetId }}
    >
      {children}
    </PetContext.Provider>
  );
}
