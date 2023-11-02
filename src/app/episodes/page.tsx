import Image from "next/image";
import logo from '@/assets/episodes-logo.png'
import { Metadata } from 'next'
import { EpisodesFilter } from "@/components/EpisodesFilter";
import { EpisodesList } from "@/components/EpisodesList";

export const metadata: Metadata = {
  title: 'Episodes | Rick And Morty Project',
}

export default function Episodes() {
  return (
    <main className="max-w-7xl w-full m-auto flex flex-col items-center px-6 py-2">
      <Image src={logo} alt="Page Logo" className="w-full max-w-md my-4 animate-entrance-center" />

      <EpisodesFilter />

      <EpisodesList />
    </main>
  )
}