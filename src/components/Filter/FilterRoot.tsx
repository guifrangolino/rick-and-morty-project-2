import { ReactNode } from "react"

type FilterRootProps = {
  children: ReactNode
}

export function FilterRoot({ children }: FilterRootProps) {
  return (
    <div className="w-full grid grid-cols-2 justify-items-center gap-6 my-6 md:flex md:items-center md:justify-center">
      {children}
    </div>
  )
}