'use client'

import { useState } from 'react'
import { Filter } from "@/components/Filter";
import { useSearchParams } from "next/navigation";
import { speciesOptions, genderOptions, statusOptions } from '@/assets/selectsOptions'

export function CharactersFilter() {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  const [inputValue, setInputValue] = useState(searchParams.get('name') ?? '')
  const species = searchParams.get('species')
  const gender = searchParams.get('gender')
  const status = searchParams.get('status')

  const paramsList: { [index: string]: any } = {
    name,
    species,
    gender,
    status
  }

  return (
    <>
      <Filter.Root>
        <Filter.Input
          inputValue={inputValue}
          setInputValue={setInputValue}
          paramsList={paramsList}
        />
        <Filter.ModalArea>
          <Filter.Select
            placeholder="Species"
            type='species'
            selectOptions={speciesOptions}
            queryParam={species}
            paramsList={paramsList}
          />
          <Filter.Select
            placeholder="Gender"
            type='gender'
            selectOptions={genderOptions}
            queryParam={gender}
            paramsList={paramsList}
          />
          <Filter.Select
            placeholder="Status"
            type='status'
            selectOptions={statusOptions}
            queryParam={status}
            paramsList={paramsList}
          />
        </Filter.ModalArea>
        <Filter.Clear path='/characters' setInputValue={setInputValue} />
      </Filter.Root>
    </>
  )
}