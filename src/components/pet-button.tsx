import React from "react";
import { Button } from "./ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import PetForm from "./pet-form";

type PetButtonProps = {
  actionType: "add" | "edit" | "checkout";
  onClick?: () => void;
  children?: React.ReactNode;
};

export default function PetButton({
  actionType,
  children,
  onClick,
}: PetButtonProps) {
  if (actionType === "checkout") {
    return (
      <Button variant={"secondary"} onClick={onClick}>
        {children}
      </Button>
    );
  }

  if (actionType === "add" || actionType === "edit") {
    return (
      <Dialog>
        <DialogTrigger asChild>
          {actionType === "add" ? (
            <Button size="icon">
              <PlusIcon className="h-6 w-6" />
            </Button>
          ) : (
            <Button variant={"secondary"}>{children}</Button>
          )}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {actionType === "add" ? "Add a new pet" : "Edit pet"}
            </DialogTitle>
          </DialogHeader>

          <PetForm actionType={actionType} />
        </DialogContent>
      </Dialog>
    );
  }
}
