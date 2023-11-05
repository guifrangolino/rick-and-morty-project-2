'use client'

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"

export function BackButton() {
  const router = useRouter()

  return (
    <Button className="self-start mt-3" onClick={() => router.back()}>
      <ArrowLeft className="mr-2 w-5 h-5" />
      Go Back
    </Button>
  )
}