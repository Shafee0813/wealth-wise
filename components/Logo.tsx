import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo.png" alt="Logo" width={45} height={45} className="pt-2" />
      <p className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-2xl font-bold leading-tight tracking-tighter text-transparent">
        WealthWise
      </p>
    </Link>
  )
}

export default Logo