'use client'

import { Search } from "lucide-react"
import { Input } from "../ui/input"
import { useRouter } from "next/navigation"
import { useEffect } from 'react'

type FilterInputProps = {
  inputValue: string
  setInputValue: (string: string) => void
  paramsList: {
    [index: string]: any
  }
}

export function FilterInput({ inputValue, setInputValue, paramsList }: FilterInputProps) {
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

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue === '') {
        handleFilterChange('name', null)
      } else {
        handleFilterChange('name', inputValue)
      }
    }, 1000)

    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue])

  return (
    <div className="relative max-w-[240px] w-full">
      <Search
        className="absolute top-0 bottom-0 w-4 h-4 my-auto left-4 cursor-pointer"
      />
      <Input
        type="text"
        placeholder="Filter by name..."
        value={inputValue}
        className="pl-12 pr-4 text-sm py-4"
        onChange={(event) => {
          const eventTarget = event.target as HTMLInputElement
          setInputValue(eventTarget.value)
        }}
      />
    </div>
  )
}