import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Metadata } from 'next'
import { Information } from "@/components/InformationNote"
import { CharacterMember } from "@/components/CharacterMember"

type DataProps = {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
}

interface Params {
  id: string;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = params;
  const url = 'https://rickandmortyapi.com/api/episode/' + id

  const data = await fetch(url).then((res) => res.json())

  return {
    title: `${data.name} | Rick And Morty Project`
  };
}

export default async function EpisodeDetail({ params }: { params: { id: string } }) {
  const response = await fetch(`https://rickandmortyapi.com/api/episode/${params.id}`)
  const data: DataProps = await response.json()

  return (
    <main className="max-w-7xl w-full m-auto flex flex-col items-center px-6 py-2">
      <Button asChild className="self-start mt-3">
        <Link href="/locations">
          <ArrowLeft className="mr-2 w-5 h-5" />
          Go Back
        </Link>
      </Button>

      <div className="w-full flex justify-around items-center mt-2 mb-8">
        <Information.Root>
          <Information.Title title={data.name} />
          <Information.List>
            <Information.Item content={`Episode: ${data.episode}`} />
            <Information.Item content={`Date: ${data.air_date}`} />
          </Information.List>
        </Information.Root>
      </div>

      <div className="w-full">
        <h3 className="text-3xl my-4">Cast</h3>
        <ul className="w-full max-w-[1060px] flex flex-wrap gap-6 justify-evenly m-auto mt-4 mb-4">
          {data.characters.map(char => {
            const charUrlParts = char.split('/').filter(Boolean)
            const charId = Number(charUrlParts[charUrlParts.length - 1])

            return <CharacterMember key={charId} id={charId} />
          })}
        </ul>
      </div>

    </main>
  )
}