import { auth } from "./auth";
import { redirect } from "next/navigation";

export async function checkAuth() {
  const section = await auth();

  if (!section?.user) {
    redirect("/login");
  }

  return section;
}
