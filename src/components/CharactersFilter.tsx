'use client'

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { speciesOptions, genderOptions, statusOptions } from '@/assets/selectsOptions'
import { useRouter, useSearchParams } from "next/navigation";

export function CharactersFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  const species = searchParams.get('species')
  const gender = searchParams.get('gender')
  const status = searchParams.get('status')

  const paramsList: { [index: string]: any } = {
    species,
    gender,
    status
  }

  function handleFilterChange(type: string, filter: string) {
    paramsList[type] = filter
    let params = ['?']

    for (const key in paramsList) {
      if (paramsList[key] !== null) {
        params = [...params, `&${key}=${paramsList[key]}`]
      }
    }

    router.push(params.join(''))
  }

  // , { scroll: false } => não dar scroll pra topo

  return (
    <div className="w-full flex items-center justify-center gap-6 my-6">

      <div className="relative max-w-[240px] w-full">
        <Search
          className="absolute top-0 bottom-0 w-4 h-4 my-auto left-4 cursor-pointer"
          onClick={(event) => {
            const eventTarget = event.target as SVGElement
            // @ts-ignore
            console.log(eventTarget.nextElementSibling.value)
          }} />
        <Input
          type="text"
          placeholder="Filter by name..."
          className="pl-12 pr-4 text-sm py-4"
          onKeyDown={(event) => {
            const eventTarget = event.target as HTMLInputElement
            event.key === 'Enter' && eventTarget.blur()
            return event.key === 'Enter' && console.log(eventTarget.value)
          }}
        />
      </div>

      <Select
        onValueChange={(selectValue) => handleFilterChange('species', selectValue)}
        defaultValue={species ?? undefined}
      >
        <SelectTrigger className="w-[240px]">
          <SelectValue placeholder="Species" />
        </SelectTrigger>
        <SelectContent>
          {speciesOptions.map((specie, index) => (
            <SelectItem key={index} value={specie.value}>{specie.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        onValueChange={(selectValue) => handleFilterChange('gender', selectValue)}
        defaultValue={gender ?? undefined}
      >
        <SelectTrigger className="w-[240px]">
          <SelectValue placeholder="Gender" />
        </SelectTrigger>
        <SelectContent>
          {genderOptions.map((gender, index) => (
            <SelectItem key={index} value={gender.value}>{gender.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        onValueChange={(selectValue) => handleFilterChange('status', selectValue)}
        defaultValue={status ?? undefined}
      >
        <SelectTrigger className="w-[240px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          {statusOptions.map((status, index) => (
            <SelectItem key={index} value={status.value}>{status.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>

    </div>
  )
}