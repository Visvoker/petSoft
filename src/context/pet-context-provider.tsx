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
  handleChangeSelectedPetId: (id: string) => void;
};

export const PetContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({
  children,
  data,
}: PetContextProviderProps) {
  const [pets, setPets] = useState(data);
  const [selectPetId, setSelectPetId] = useState<string | null>(null);

  console.log(selectPetId);

  const handleChangeSelectedPetId = (id: string) => {
    setSelectPetId(id);
  };

  return (
    <PetContext.Provider
      value={{ pets, selectPetId, handleChangeSelectedPetId }}
    >
      {children}
    </PetContext.Provider>
  );
}
