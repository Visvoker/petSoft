import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

type PetFormBtnProps = {
  actionType: "add" | "edit";
};

export default function PetFormBtn({ actionType }: PetFormBtnProps) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="mt-5 self-end" disabled={pending}>
      {actionType === "add" ? "Add a new pet" : "Edit pet"}
    </Button>
  );
}
