import Image from "next/image"

const Logo = () => {
  return (
    <div className="">
        <Image src="/logo.png" alt="Logo" width={50} height={50}/>
    </div>
  )
}

export default Logo