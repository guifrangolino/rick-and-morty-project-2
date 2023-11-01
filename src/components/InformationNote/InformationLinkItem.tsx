import { ArrowRight } from "lucide-react"
import Link from "next/link"

type InformationLinkItemProps = {
  href: string
  content: string
}

export function InformationLinkItem({ href, content }: InformationLinkItemProps) {
  return (
    <Link href={href} className="w-full inline-flex items-center justify-center hover:scale-[1.03] transition-transform">
      {content}
      <ArrowRight className="ml-2" />
    </Link>
  )
}