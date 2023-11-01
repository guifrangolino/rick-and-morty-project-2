import Image from "next/image"
import topPart from '@/assets/paper-top-part.png'
import bottomPart from '@/assets/paper-bottom-part.png'
import { ReactNode } from "react"

type InformationRootProps = {
  children: ReactNode
}

export function InformationRoot({ children }: InformationRootProps) {
  return (
    <div className="relative w-full max-w-sm">
      <Image src={topPart} alt="Picture Frame" className="w-full" />
      <div className="w-full bg-[rgba(238,238,238,255)] px-4 py-2 font-handwrite text-black">
        {children}
      </div>
      <Image src={bottomPart} alt="Picture Frame" className="w-full" />
    </div>
  )
}