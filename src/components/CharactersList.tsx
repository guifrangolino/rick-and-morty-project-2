'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { CharactersListSkeleton } from "./CharactersListSkeleton";
import { useState } from 'react'
import { CharacterNote } from "./CharacterNote";
import { NotFound } from './NotFound';

type DataProps = {
  id: number
  name: string
  origin: {
    url: string
  },
  image: string
}

export function CharactersList() {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  const species = searchParams.get('species')
  const gender = searchParams.get('gender')
  const status = searchParams.get('status')
  const [pageLimit, setPageLimit] = useState(1)

  const { data, isFetching, fetchNextPage, hasNextPage, isFetchingNextPage, isError } = useInfiniteQuery<DataProps[]>(
    {
      queryKey: ['characters', name, species, gender, status],
      queryFn: async ({ pageParam }) => {
        try {
          const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pageParam}&name=${name ?? ''}&species=${species ?? ''}&gender=${gender ?? ''}&status=${status ?? ''}`)

          response.data.info.pages !== pageLimit && setPageLimit(response.data.info.pages)

          return response.data.results
        } catch (error) {
          // @ts-ignore
          if (error.response.status === 404) {
            throw Error
          }
        }
      },
      initialPageParam: 1,
      getNextPageParam: (_lastPage, allPages) => allPages.length < pageLimit ? allPages.length + 1 : undefined,
      retry: false
    }
  )

  return (
    <>
      <ul className="w-full max-w-[1060px] flex flex-wrap gap-6 justify-evenly my-4">
        {isFetching && <CharactersListSkeleton />}

        {isError && <NotFound text='Character Not Found.' />}

        {!isError && data?.pages.map(page => (
          page.map((char, index) => (
            <CharacterNote key={index} id={char.id} image={char.image} name={char.name} />
          ))
        ))}
        {isFetchingNextPage && <CharactersListSkeleton />}
      </ul>

      {hasNextPage && !isError &&
        <Button
          variant="secondary"
          className="my-4"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </Button>
      }
    </>
  )
}