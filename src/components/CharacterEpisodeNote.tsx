'use client'

import { useQuery } from "@tanstack/react-query"
import { Note } from "./Note"
import axios from "axios"
import { Skeleton } from "./ui/skeleton"

type CharacterEpisodeNoteProps = {
  id: number
}

type DataProps = {
  episode: string
  name: string
  air_date: string
}

export function CharacterEpisodeNote({ id }: CharacterEpisodeNoteProps) {
  const { data, isFetching } = useQuery<DataProps>(
    {
      queryKey: [`character-${id}-ep-note`, id],
      queryFn: async () => {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`)

        return response.data
      },
      refetchOnWindowFocus: false,
    }
  )

  return (
    <>
      {isFetching &&
        <li className="relative w-60 h-[192px]">
          <Skeleton className="w-full h-full" />
        </li>
      }
      {!isFetching &&
        <Note.Root href={`/episodes/${id}`}>
          <Note.Title text={data?.episode ?? ''} />
          <Note.Content text={data?.name ?? ''} />
          <Note.Span text={data?.air_date ?? ''} />
        </Note.Root>}
    </>
  )
}