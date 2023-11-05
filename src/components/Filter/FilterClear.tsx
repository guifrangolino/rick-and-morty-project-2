import { FilterX } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type FilterClearProps = {
  path: string
  setInputValue?: (string: string) => void
}

export function FilterClear({ path, setInputValue }: FilterClearProps) {
  const router = useRouter()

  function handleClick() {
    setInputValue && setInputValue('')
    router.replace(`${path}`, { scroll: false })
  }

  return (
    <Button onClick={() => handleClick()} className="h-[34px]">
      <FilterX className="w-5 h-5" />
    </Button>
  )
}