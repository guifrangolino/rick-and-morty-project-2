import Link from "next/link"
import frame from '@/assets/paper-note.png'
import Image from "next/image"
import { ReactNode } from 'react'

type NoteRootProps = {
  children: ReactNode
  href: string
}

export function NoteRoot({ children, href }: NoteRootProps) {
  return (
    <li className="relative w-full max-w-[240px] h-48 hover:scale-105 transition-transform">
      <Image src={frame} alt="Picture Frame" className="absolute top-0 left-0 w-full" />
      <Link href={href} className="w-full h-full flex flex-col items-center justify-center text-center text-black font-handwrite relative p-4 pt-8">
        {children}
      </Link>
    </li>
  )
}