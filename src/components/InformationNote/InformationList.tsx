import { ReactNode } from "react"

type InformationListProps = {
  children: ReactNode
}

export function InformationList({ children }: InformationListProps) {
  return (
    <ul className="flex flex-col items-center w-full mt-4 gap-3 text-xl text-center">
      {children}
    </ul>
  )
}