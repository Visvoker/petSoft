import ContentBlock from "@/components/content-block";
import H1 from "@/components/h1";
import SignOutBtn from "@/components/sign-out-btn";

import auth from "@/middleware";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const section = await auth();

  if (!section?.user) {
    redirect("/login");
  }

  return (
    <main>
      <H1 className="my-8 text-white">Your account</H1>

      <ContentBlock className="h-[500px] flex flex-col gap-3 justify-center items-center">
        <p> Logged in as ...{section.user.email}</p>
        <SignOutBtn />
      </ContentBlock>
    </main>
  );
}
