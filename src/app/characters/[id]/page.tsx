import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import teste from '@/assets/teste.jpeg'
import frame from '@/assets/img-frame.png'
import Image from "next/image"
import topPart from '@/assets/paper-top-part.png'
import bottomPart from '@/assets/paper-bottom-part.png'
import { Metadata } from 'next'

type DataProps = {
  id: number
  name: string
  status: string
  species: string
  gender: string
  origin: {
    name: string
  }
  type: string
  image: string
  location: {
    name: string
    url: string
  }
}

interface Params {
  id: string;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = params;
  const url = 'https://rickandmortyapi.com/api/character/' + id

  const data = await fetch(url).then((res) => res.json())

  return {
    title: `${data.name} | Rick And Morty Project`
  };
}

export default async function CharacterDetail({ params }: { params: { id: string } }) {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
  const data: DataProps = await response.json()

  return (
    <main className="max-w-7xl w-full m-auto flex flex-col items-center px-6 py-2">
      <Button asChild className="self-start mt-3">
        <Link href="/characters">
          <ArrowLeft className="mr-2 w-5 h-5" />
          Go Back
        </Link>
      </Button>

      <div className="w-full flex justify-around items-center">
        <div className="relative w-full max-w-xs">
          <Image src={frame} alt="Picture Frame" className="z-[1] relative top-0 left-0 w-full" />
          <Image src={data.image} alt="Rick Picture" width={250} height={250} className="w-full px-4 pt-8 scale-[1.03] absolute top-0" />
          <h2 title={data.name} className="z-[2] text-black absolute bottom-0 font-handwrite text-4xl p-4 w-full text-center truncate">{data.name}</h2>
        </div>

        <div className="relative w-full max-w-sm">
          <Image src={topPart} alt="Picture Frame" className="w-full" />
          <div className="w-full bg-[rgba(238,238,238,255)] px-4 py-2 font-handwrite text-black">
            <h3 className="text-3xl underline underline-offset-4">Informations</h3>
            <ul className="flex flex-col w-full mt-4 gap-3 text-xl">
              <li>Gender: {data.gender}</li>
              <li>Status: {data.status}</li>
              <li>Species: {data.species}</li>
              <li>Origin: {data.origin.name}</li>
              <li>Type: {data.type === '' ? 'Unknown' : data.type}</li>
              <li>
                <Link href={'/'} className="w-full inline-flex items-center hover:scale-[1.03] transition-transform">
                  Location: {data.location.name}
                  <ArrowRight className="m-auto" />
                </Link>
              </li>
            </ul>
          </div>
          <Image src={bottomPart} alt="Picture Frame" className="w-full" />
        </div>
      </div>

      <div>
        {/* episodes */}
      </div>

    </main>
  )
}