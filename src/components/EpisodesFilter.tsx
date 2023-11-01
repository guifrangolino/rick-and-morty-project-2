'use client'

import { useState } from 'react'
import { Filter } from "@/components/Filter";
import { FilterInput } from "@/components/Filter/FilterInput";
import { useSearchParams } from "next/navigation";

export function EpisodesFilter() {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  const [inputValue, setInputValue] = useState(searchParams.get('name') ?? '')

  const paramsList: { [index: string]: any } = {
    name
  }

  return (
    <>
      <Filter.Root>
        <FilterInput inputValue={inputValue} setInputValue={setInputValue} paramsList={paramsList} />
      </Filter.Root>
    </>
  )
}