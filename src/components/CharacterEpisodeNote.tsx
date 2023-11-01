import { Note } from "./Note"

type CharacterEpisodeNoteProps = {
  id: number
}

type DataProps = {
  episode: string
  name: string
  air_date: string
}

export async function CharacterEpisodeNote({ id }: CharacterEpisodeNoteProps) {
  const resp = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
  const data: DataProps = await resp.json()

  return (
    <Note.Root href={`/episodes/${id}`}>
      <Note.Title text={data.episode} />
      <Note.Content text={data.name} />
      <Note.Span text={data.air_date} />
    </Note.Root>
  )
}