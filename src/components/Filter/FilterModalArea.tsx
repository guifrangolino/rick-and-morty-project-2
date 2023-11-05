import { ReactNode } from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "../ui/button"
import { Filter, X } from "lucide-react"

type FilterModalAreaProps = {
  children: ReactNode
  isLocation?: boolean
}

export function FilterModalArea({ children, isLocation }: FilterModalAreaProps) {
  return (
    <>
      <div className={`hidden md:flex order-1 basis-full justify-center w-full ${isLocation ? 'max-w-[504px]' : 'max-w-3xl'} gap-6 lg:basis-auto lg:order-none`}>
        {children}
      </div>
      <div className="md:hidden flex justify-center order-1 basis-full">
        <AlertDialog>
          <AlertDialogTrigger asChild className="md:hidden">
            <Button>
              <Filter className="mr-3 w-5 h-5" />
              Advanced Filters
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="w-full max-w-[360px]">
            <AlertDialogHeader className="flex-row items-center justify-between -mt-3">
              <AlertDialogTitle className="mt-2">Filters</AlertDialogTitle>
              <AlertDialogCancel>
                <X />
              </AlertDialogCancel>
            </AlertDialogHeader>
            <div className="flex flex-col items-center justify-center gap-6 my-4">
              {children}
            </div>
            <AlertDialogFooter>
              <AlertDialogAction className="w-full">Apply</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  )
}