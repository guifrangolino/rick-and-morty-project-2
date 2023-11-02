'use client'

import { useQuery } from "@tanstack/react-query"
import { CharacterNote } from "./CharacterNote"
import axios from "axios"
import { Skeleton } from "./ui/skeleton"

type CharacterEpisodeNoteProps = {
  id: number
}

type DataProps = {
  id: number
  name: string
  image: string
}

export function CharacterMember({ id }: CharacterEpisodeNoteProps) {
  const { data, isFetching } = useQuery<DataProps>(
    {
      queryKey: [`character-${id}-ep-note`, id],
      queryFn: async () => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)

        return response.data
      },
      refetchOnWindowFocus: false,
    }
  )

  return (
    <>
      {isFetching &&
        <li className="relative w-60 h-[294px]">
          <Skeleton className="w-full h-full" />
        </li>
      }
      {!isFetching &&
        <CharacterNote id={data?.id || Math.random()} name={data?.name || ''} image={data?.image || ''} />
      }
    </>
  )
}