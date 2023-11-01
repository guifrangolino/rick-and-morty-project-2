import { Skeleton } from './ui/skeleton'

export function LocationListSkeleton() {
  return (
    <>
      {Array.from({ length: 12 }, (_, i) => i + 1).map((_, index) => (
        <li key={index} className="relative w-60 h-[192px]">
          <Skeleton className="w-full h-full" />
        </li>
      ))}
    </>
  )
}