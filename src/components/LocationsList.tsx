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
  type: string
}

export function LocationsList() {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  const type = searchParams.get('type')
  const dimension = searchParams.get('dimension')
  const [pageLimit, setPageLimit] = useState(1)

  const { data, isFetching, fetchNextPage, hasNextPage, isFetchingNextPage, isError } = useInfiniteQuery<DataProps[]>(
    {
      queryKey: ['characters', name, type, dimension],
      queryFn: async ({ pageParam }) => {
        try {
          const response = await axios.get(`https://rickandmortyapi.com/api/location?page=${pageParam}&name=${name ?? ''}&type=${type ?? ''}&dimension=${dimension ?? ''}`)

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
      retry: false,
      refetchOnWindowFocus: false
    }
  )

  return (
    <>
      <ul className="w-full max-w-[1060px] grid grid-cols-mobile sm:grid-cols-lg-screen justify-items-center gap-6 my-4">
        {isFetching && <LocationListSkeleton />}

        {isError && <NotFound text='Location Not Found.' />}

        {!isError && data?.pages.map(page => (
          page.map((location, index) => (
            <Note.Root key={index} href={`/locations/${location.id}`}>
              <Note.Title text={location.name} />
              <Note.Content text={location.type} underline />
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