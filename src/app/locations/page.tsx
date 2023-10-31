import Image from "next/image";
import logo from '@/assets/locations-logo.png'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Locations | Rick And Morty Project',
}

export default function Locations() {
  return (
    <main className="max-w-7xl w-full m-auto flex flex-col items-center px-6 py-2">
      <Image src={logo} alt="Page Logo" className="w-full max-w-md my-4" />
    </main>
  )
}