import Logo from "./Logo"

const Navbar = () => {
  return (
    <header className="h-16 flex w-full backdrop-blur-sm bg-[rgba(0,0,0,0.3)] sticky top-0 z-50">
        <nav className="flex items-center justify-between px-10 h-full">
            <Logo/>
            
        </nav>
    </header>
    )
}

export default Navbar