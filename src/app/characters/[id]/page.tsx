import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import frame from '@/assets/img-frame.png'
import Image from "next/image"
import { Metadata } from 'next'
import { CharacterEpisodeNote } from "@/components/CharacterEpisodeNote"
import { Information } from "@/components/InformationNote"

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
  episode: string[]
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

  function getLocationId(url: string) {
    const urlParts = url.split('/').filter(Boolean)
    const urlId = Number(urlParts[urlParts.length - 1])

    return urlId
  }

  return (
    <main className="max-w-7xl w-full m-auto flex flex-col items-center px-6 py-2">
      <Button asChild className="self-start mt-3">
        <Link href="/characters">
          <ArrowLeft className="mr-2 w-5 h-5" />
          Go Back
        </Link>
      </Button>

      <div className="w-full flex justify-around items-center mt-2 mb-8">
        <div className="relative w-full max-w-xs animate-entrance-center">
          <Image src={frame} alt="Picture Frame" className="z-[1] relative top-0 left-0 w-full" />
          <Image src={data.image} alt="Rick Picture" width={250} height={250} className="w-full px-4 pt-8 scale-[1.03] absolute top-0" />
          <h2 title={data.name} className="z-[2] text-black absolute bottom-0 font-handwrite text-4xl p-4 w-full text-center truncate">{data.name}</h2>
        </div>

        <Information.Root>
          <Information.Title title="Informations" />
          <Information.List>
            <Information.Item content={`Name: ${data.name}`} />
            <Information.Item content={`Gender: ${data.gender}`} />
            <Information.Item content={`Status: ${data.status}`} />
            <Information.Item content={`Species: ${data.species}`} />
            <Information.Item content={`Origin: ${data.origin.name}`} />
            <Information.Item content={`Type: ${data.type === '' ? 'Unknown' : data.type}`} />
            <Information.LinkItem content={`Location: ${data.location.name}`} href={`/locations/${getLocationId(data.location.url)}`} />
          </Information.List>
        </Information.Root>

      </div>

      <div className="w-full">
        <h3 className="text-3xl my-4 text-center md:text-start animate-entrance-left">Episodes</h3>
        <ul className="w-full max-w-[1060px] flex flex-wrap gap-6 justify-evenly m-auto mt-8 mb-4">
          {data.episode.map((ep, index) => {
            const epUrlParts = ep.split('/').filter(Boolean)
            const epId = Number(epUrlParts[epUrlParts.length - 1])

            return <CharacterEpisodeNote id={epId} key={index} />
          })}
        </ul>
      </div>

    </main>
  )
}