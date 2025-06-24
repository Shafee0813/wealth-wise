import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

const page = async () => {
    const user = await auth();
    const currUser = await currentUser();
    if (!user.userId) {
        return redirect('/sign-in')
    }

    return (
        <div className="relative h-screen w-screen bg-[#101010] overflow-hidden">
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(4,120,87,0.15),rgba(255,255,255,0))]">
            </div>
            <div className="absolute bottom-0 right-[-20%] top-[-20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(4,120,87,0.15),rgba(255,255,255,0))]">
            </div>
            <div className="flex flex-col items-center justify-center h-full w-full">
                <h1 className="heading-text font-bold">Hello {currUser?.firstName} 👋</h1>
                <p className="regular-text font-bold">Let&apos;s get started</p>
                <CurrencyPicker/>
            </div>
        </div>
    )
}

const CurrencyPicker = () => {
    return (
        <div>
            <p>Choose your currency</p>
        </div>
    )
}

export default page