import OpportunityCard from "../opportunitiesPage/OpportunityCard";
import { ApiProduce } from "@/lib";
import { FaArrowRight } from "react-icons/fa";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

async function getOpportunities(): Promise<ApiProduce[]> {
  const res = await fetch(`${backendUrl}/api/produce`, {
    // prevents stale data if you want it always fresh
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch opportunities");
  }

  const data = await res.json();

  // adjust this only if your API wraps the array
  // e.g { data: [...] }
  return data;
}

export default async function FeaturedOpportunities() {
  const opportunities = await getOpportunities();

  return (
    <section className="bg-[#f0fdf4] dark:bg-[#0f1a0c] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-text-main dark:text-white md:text-3xl tracking-tight">
            Featured Opportunities
          </h2>

          <a
            className="hidden sm:flex items-center gap-1 text-sm font-bold text-primary hover:text-primary-dark transition-colors"
            href="#"
          >
            View All Projects <FaArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opportunity) => (
            <OpportunityCard key={opportunity._id} opportunity={opportunity} />
          ))}
        </div>

        <div className="mt-8 sm:hidden text-center">
          <a
            className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-primary-dark transition-colors"
            href="#"
          >
            View All Projects <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
