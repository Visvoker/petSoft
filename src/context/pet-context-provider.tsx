"use client";

import { createContext, useState } from "react";

export const PetContext = createContext(null);

export default function PetContextProvider({ children, data }) {
  const [pets, setPets] = useState(data);
  const [selectPetId, setSelectPetId] = useState(null);

  return (
    <PetContext.Provider value={{ pets, selectPetId }}>
      {children}
    </PetContext.Provider>
  );
}
