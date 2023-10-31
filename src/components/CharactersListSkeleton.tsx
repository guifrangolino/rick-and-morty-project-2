import frame from '@/assets/img-frame.png'
import Image from 'next/image'
import { Skeleton } from './ui/skeleton'

export function CharactersListSkeleton() {
  return (
    <>
      {Array.from({ length: 12 }, (_, i) => i + 1).map((_, index) => (
        <li key={index} className="relative w-60 h-[294px]">
          <Skeleton className="w-full h-full" />
        </li>
      ))}
    </>
  )
}