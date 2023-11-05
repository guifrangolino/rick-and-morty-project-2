import { Metadata } from 'next'
import { Information } from "@/components/InformationNote"
import { CharacterMember } from "@/components/CharacterMember"
import { BackButton } from "@/components/BackButton"

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
      <BackButton />

      <div className="w-full flex justify-around items-center my-8">
        <Information.Root>
          <Information.Title title={data.name} />
          <Information.List>
            <Information.Item content={`Episode: ${data.episode}`} />
            <Information.Item content={`Date: ${data.air_date}`} />
          </Information.List>
        </Information.Root>
      </div>

      <div className="w-full">
        <h3 className="text-3xl my-4 text-center md:text-start animate-entrance-left">Cast</h3>
        <ul className="w-full max-w-[1060px] grid grid-cols-mobile sm:grid-cols-lg-screen justify-items-center gap-6 m-auto mt-8 mb-4">
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