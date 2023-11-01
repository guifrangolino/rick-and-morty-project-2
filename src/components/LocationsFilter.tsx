'use client'

import { useState } from 'react'
import { Filter } from "@/components/Filter";
import { FilterInput } from "@/components/Filter/FilterInput";
import { useSearchParams } from "next/navigation";
import { locationsTypeOptions, dimensionsOptions } from '@/assets/selectsOptions'

export function LocationsFilter() {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  const [inputValue, setInputValue] = useState(searchParams.get('name') ?? '')
  const type = searchParams.get('type')
  const dimension = searchParams.get('dimension')

  const paramsList: { [index: string]: any } = {
    name,
    type,
    dimension
  }

  return (
    <>
      <Filter.Root>
        <FilterInput inputValue={inputValue} setInputValue={setInputValue} paramsList={paramsList} />
        <Filter.Select
          placeholder="Type"
          type='type'
          selectOptions={locationsTypeOptions}
          queryParam={type}
          paramsList={paramsList}
        />
        <Filter.Select
          placeholder="Dimension"
          type='dimension'
          selectOptions={dimensionsOptions}
          queryParam={dimension}
          paramsList={paramsList}
        />
      </Filter.Root>
    </>
  )
}