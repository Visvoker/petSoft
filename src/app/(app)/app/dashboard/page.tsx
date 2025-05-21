import Branding from "@/components/branding";
import ContentBlock from "@/components/content-block";
import PetDetail from "@/components/pet-detail";
import PetList from "@/components/pet-list";
import SearchForm from "@/components/search-form";
import Stats from "@/components/stats";

export default function DashboardPage() {
  return (
    <main>
      <div className="flex items-center justify-between text-white py-8 ">
        <Branding />

        <Stats />
      </div>

      <div className="grid md:grid-cols-3 md:grid-rows-[45px_1fr] grid-rows-[45px_300px_500px] gap-4 md:h-[600px]">
        <div className="row-start-1 row-span-1 col-start-1 col-span-1">
          <SearchForm />
        </div>

        <div className="md:row-start-2 md:row-span-full md:col-start-1 md:col-span-1">
          <ContentBlock>
            <PetList />
          </ContentBlock>
        </div>

        <div className="md:row-start-1 md:row-span-full md:col-start-2 md:col-span-full">
          <ContentBlock>
            <PetDetail />
          </ContentBlock>
        </div>
      </div>
    </main>
  );
}
