"use client"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Logo from "./Logo"
import { redirect } from "next/navigation"

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
                <button className=" px-4 py-2 rounded-md bg-emerald-800 z-50 cursor-pointer hover:bg-emerald-100" onClick={() => {redirect("/sign-in")}}>
                    Sign in
                </button>
            </SignedOut>
        </nav>
        
    </header>
    )
}

export default Navbar