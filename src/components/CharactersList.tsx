'use client'

import Image from "next/image";
import Link from "next/link";
import frame from '@/assets/img-frame.png'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { CharactersListSkeleton } from "./CharactersListSkeleton";
import { useState } from 'react'

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

  const { data, isFetching, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery<DataProps[]>(
    {
      queryKey: ['characters', name, species, gender, status],
      queryFn: async ({ pageParam }) => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pageParam}&name=${name ?? ''}&species=${species ?? ''}&gender=${gender ?? ''}&status=${status ?? ''}`)

        response.data.info.pages !== pageLimit && setPageLimit(response.data.info.pages)

        return response.data.results
      },
      initialPageParam: 1,
      getNextPageParam: (_lastPage, allPages) => allPages.length < pageLimit ? allPages.length + 1 : undefined
    }
  )

  return (
    <>
      <ul className="w-full max-w-[1060px] flex flex-wrap gap-6 justify-evenly mb-4">
        {/* <CharactersListSkeleton /> */}
        {isFetching && <CharactersListSkeleton />}
        {!isFetching && data?.pages.map(page => (
          page.map((char, index) => (
            <li key={index} title={char.name} className="relative w-60 h-[294px] hover:scale-105 transition-transform">
              <Link href={`/characters/${char.id}`}>
                <Image src={frame} alt="Picture Frame" className="z-[1] absolute top-0 left-0 w-full" />
                <Image src={char.image} alt={`${char.name} Picture`} width={250} height={250} className="w-full px-4 pt-8 scale-[1.03]" />
                <h2 className="z-[2] text-black absolute bottom-0 font-handwrite text-2xl p-2 w-full text-center truncate">{char.name}</h2>
              </Link>
            </li>
          ))
        ))}
      </ul>
      {hasNextPage &&
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