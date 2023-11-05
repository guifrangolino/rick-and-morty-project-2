import { Skeleton } from './ui/skeleton'

export function LocationListSkeleton() {
  return (
    <>
      {Array.from({ length: 12 }, (_, i) => i + 1).map((_, index) => (
        <li key={index} className="relative w-full max-w-[240px] aspect-info-note-short">
          <Skeleton className="w-full h-full" />
        </li>
      ))}
    </>
  )
}