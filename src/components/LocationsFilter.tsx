'use client'

import { useState } from 'react'
import { Filter } from "@/components/Filter";
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
        <Filter.Input
          inputValue={inputValue}
          setInputValue={setInputValue}
          paramsList={paramsList}
        />
        <Filter.ModalArea isLocation>
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
        </Filter.ModalArea>
        <Filter.Clear path='/locations' setInputValue={setInputValue} />
      </Filter.Root>
    </>
  )
}