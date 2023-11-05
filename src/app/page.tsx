import Image from "next/image";
import logo from '@/assets/home-logo.png'
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-homeHeight max-w-7xl w-full m-auto flex flex-col md-lg:flex-row items-center justify-around gap-4 px-6 py-2">
      <Image src={logo} alt="Page Logo" className="w-full max-w-[200px] md-lg:max-w-xs animate-entrance-left" />
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
