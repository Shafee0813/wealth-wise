"use client"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Logo from "./Logo"
import { Button } from "./ui/button"
import Link from "next/link"

const Navbar = () => {
  return (
    <header className="h-16 flex w-full backdrop-blur-sm bg-[rgba(0,0,0,0.3)] sticky top-0 z-10">
        <nav className="flex items-center justify-between px-10 h-full w-full">
            <Logo/>
            <SignedIn>
                <div className="flex items-center gap-2 border-2 border-emerald-500 rounded-full">
                    <UserButton/>
                </div>
            </SignedIn>
            <SignedOut>
                <Button className="hover:bg-neutral-800 hover:text-white" variant="ghost" asChild>
                    <Link href="/sign-in">Sign in</Link>
                </Button>
            </SignedOut>
        </nav>
        
    </header>
    )
}

export default Navbar