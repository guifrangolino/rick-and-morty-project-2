import { Metadata } from 'next'
import { Information } from "@/components/InformationNote"
import { CharacterMember } from "@/components/CharacterMember"
import { BackButton } from "@/components/BackButton"

type DataProps = {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
}

interface Params {
  id: string;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = params;
  const url = 'https://rickandmortyapi.com/api/location/' + id

  const data = await fetch(url).then((res) => res.json())

  return {
    title: `${data.name} | Rick And Morty Project`
  };
}

export default async function LocationDetail({ params }: { params: { id: string } }) {
  const response = await fetch(`https://rickandmortyapi.com/api/location/${params.id}`)
  const data: DataProps = await response.json()

  // console.log(data.residents.length)

  return (
    <main className="max-w-7xl w-full m-auto flex flex-col items-center px-6 py-2">
      <BackButton />

      <div className="w-full flex justify-around items-center mt-2 mb-8">
        <Information.Root>
          <Information.Title title={data.name} />
          <Information.List>
            <Information.Item content={`Type: ${data.type}`} />
            <Information.Item content={`Dimension: ${data.dimension}`} />
          </Information.List>
        </Information.Root>
      </div>

      <div className="w-full">
        <h3 className="text-3xl my-4 text-center md:text-start">Residents</h3>
        <ul className="w-full max-w-[1060px] flex flex-wrap gap-6 justify-evenly m-auto mt-8 mb-4">
          {data.residents.length <= 0
            ? <p className="mt-4">This location do not have residents.</p>
            : data.residents.map(resident => {
              const residentUrlParts = resident.split('/').filter(Boolean)
              const residentId = Number(residentUrlParts[residentUrlParts.length - 1])

              return <CharacterMember key={residentId} id={residentId} />
            })}
        </ul>
      </div>

    </main>
  )
}