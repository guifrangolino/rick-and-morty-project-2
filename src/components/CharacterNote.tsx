import Image from "next/image"
import Link from "next/link"
import frame from '@/assets/img-frame.png'

type CharacterNoteProps = {
  id: number
  name: string
  image: string
}

export function CharacterNote({ id, name, image }: CharacterNoteProps) {
  return (
    <li title={name} className="relative w-60 h-[294px] hover:scale-105 transition-transform animate-entrance-center">
      <Link href={`/characters/${id}`}>
        <Image src={frame} alt="Picture Frame" className="z-[1] absolute top-0 left-0 w-full" />
        <Image src={image} alt={`${name} Picture`} width={250} height={250} className="w-full px-4 pt-8 scale-[1.03]" />
        <h2 className="z-[2] text-black absolute bottom-0 font-handwrite text-2xl p-2 w-full text-center truncate">{name}</h2>
      </Link>
    </li>
  )
}