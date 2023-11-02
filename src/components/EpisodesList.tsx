'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { useState } from 'react'
import { LocationListSkeleton } from './LocationListSkeleton';
import { Note } from './Note';
import { NotFound } from './NotFound';

type DataProps = {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
}

export function EpisodesList() {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  const [pageLimit, setPageLimit] = useState(1)

  const { data, isFetching, fetchNextPage, hasNextPage, isFetchingNextPage, isError } = useInfiniteQuery<DataProps[]>(
    {
      queryKey: ['characters', name],
      queryFn: async ({ pageParam }) => {
        try {
          const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${pageParam}&name=${name ?? ''}`)

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
        {isFetching && <LocationListSkeleton />}

        {isError && <NotFound text='Episode Not Found.' />}

        {!isError && data?.pages.map(page => (
          page.map((ep, index) => (
            <Note.Root key={index} href={`/episodes/${ep.id}`}>
              <Note.Title text={ep.name} underline />
              <Note.Content text={ep.air_date} />
              <Note.Span text={ep.episode} />
            </Note.Root>
          ))
        ))}

        {isFetchingNextPage && <LocationListSkeleton />}
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