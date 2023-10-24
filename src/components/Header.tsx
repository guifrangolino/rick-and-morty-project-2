import Link from "next/link"
import logo from '@/assets/header-logo.png'
import Image from "next/image"

export function Header() {
  return (
    <header className="border-b-2">
      <div className="max-w-5xl w-full m-auto flex items-center justify-between px-6 py-2">
        <Link href='/' className="transition-all hover:drop-shadow-4xl">
          <Image src={logo} alt="Site Logo" className="max-w-[50px]" />
        </Link>
        <nav className="flex gap-4">
          <Link href='/characters' className="font-medium hover:opacity-75 transition-opacity">Characters</Link>
          <Link href='/locations' className="font-medium hover:opacity-75 transition-opacity">Locations</Link>
          <Link href='/episodes' className="font-medium hover:opacity-75 transition-opacity">Episodes</Link>
        </nav>
      </div>
    </header>
  )
}