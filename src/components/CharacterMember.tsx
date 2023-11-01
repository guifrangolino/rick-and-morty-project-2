import { CharacterNote } from "./CharacterNote"

type CharacterEpisodeNoteProps = {
  id: number
}

type DataProps = {
  id: number
  name: string
  image: string
}

export async function CharacterMember({ id }: CharacterEpisodeNoteProps) {
  const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const data: DataProps = await resp.json()

  return (
    <CharacterNote id={data.id} name={data.name} image={data.image} />
  )
}