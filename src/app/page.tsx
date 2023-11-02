import Image from "next/image";
import logo from '@/assets/home-logo.png'
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-[calc(100vh-74px)] max-w-7xl w-full m-auto flex items-center justify-around px-6 py-2">
      <Image src={logo} alt="Page Logo" className="max-w-xs animate-entrance-left" />
      <div className="max-w-md w-full flex flex-col items-center gap-5 animate-entrance-center">
        <p className="text-center text-xl">
          Immerse yourself in the Rick and Morty multiverse with real-time data using the Rick and Morty API. Explore characters, episodes, and locations!
        </p>
        <Button asChild>
          <Link href="/characters">Begin</Link>
        </Button>
      </div>
    </main>
  )
}
