import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function locationsLoading() {
  return (
    <main className="max-w-7xl w-full m-auto flex flex-col items-center px-6 py-2">
      <Button asChild className="self-start mt-3">
        <Link href="/characters">
          <ArrowLeft className="mr-2 w-5 h-5" />
          Go Back
        </Link>
      </Button>
      <div className="w-full flex justify-around items-center mt-2 mb-8">
        <Skeleton className="w-full max-w-sm aspect-info-note-short" />
      </div>
      <div className="w-full">
        <h3 className="text-3xl my-4 text-center md:text-start">Residents</h3>
        <ul className="w-full max-w-[1060px] flex flex-wrap gap-6 justify-evenly m-auto mt-8 mb-4">
          {Array.from({ length: 4 }, (_, i) => i + 1).map((_, index) => (
            <li key={index} className="relative w-60 h-[294px]">
              <Skeleton className="w-full h-full" />
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}