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
    <li title={name} className="relative w-full max-w-[240px] z-0 hover:scale-105 transition-transform animate-entrance-center">
      <Link href={`/characters/${id}`}>
        <Image src={frame} alt="Picture Frame" className="z-[1] relative top-0 left-0 w-full" />
        <Image src={image} alt={`${name} Picture`} width={250} height={250} className="w-full absolute top-[5%] left-0 scale-[0.88]" />
        <h2 className="z-[1] text-black absolute bottom-0 font-handwrite text-xl sm:text-2xl px-2 py-[6px] sm:py-2 w-full text-center truncate">{name}</h2>
      </Link>
    </li>
  )
}