'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter } from "next/navigation"

type FilterSelectProps = {
  queryParam: string | null
  placeholder: string
  type: string
  selectOptions: {
    value: string
    label: string
  }[]
  paramsList: {
    [index: string]: any
  }
}

export function FilterSelect({ queryParam, placeholder, type, selectOptions, paramsList }: FilterSelectProps) {
  const router = useRouter()

  function handleFilterChange(type: string, filter: string | null) {
    paramsList[type] = filter
    let params = ['?']

    for (const key in paramsList) {
      if (paramsList[key] !== null) {
        params = [...params, `&${key}=${paramsList[key]}`]
      }
    }

    router.push(params.join(''))
  }

  return (
    <Select
      onValueChange={(selectValue) => handleFilterChange(type, selectValue)}
      defaultValue={queryParam ?? undefined}
    >
      <SelectTrigger className="w-full max-w-[240px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="overflow-y-auto max-h-[13rem]">
        {selectOptions.map((specie, index) => (
          <SelectItem key={index} value={specie.value}>{specie.label}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}