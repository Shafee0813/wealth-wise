import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import CurrencyPicker from "@/components/CurrencyPicker"
import { getUserCurrency } from "@/lib/actions/get-user-currency"
import Link from "next/link"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const page = async () => {
    const user = await auth();
    const currUser = await currentUser();
    if (!user.userId) {
        return redirect('/sign-in')
    }
    const currency = await getUserCurrency();
    return (
        <div className="relative h-screen w-screen bg-[#101010] overflow-hidden p-3 ">
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(4,120,87,0.35),rgba(255,255,255,0))]">
            </div>
            <div className="absolute bottom-0 right-[-20%] top-[-20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(4,120,87,0.35),rgba(255,255,255,0))]">
            </div>
            <div className="flex flex-col items-center justify-center h-full w-full ">
                <h1 className="heading-text font-bold mb-3 text-center z-10">Hello {currUser?.firstName} 👋</h1>
                <p className="regular-text  mb-3 text-center z-10">Let&apos;s set up your account </p>

                <div className=" bg-[rgba(0,0,0,0.33)] mt-2 flex items-center gap-2 flex-col border-1 border-neutral-700 p-4 w-full max-w-[400px] rounded-md z-10">
                    <p className="mb-2 font-medium text-muted-foreground z-10">Choose your currency</p>
                    <CurrencyPicker/>
                    {currency && <p className="text-white z-10">Previously selected: {currency}</p>}
                </div>
                <p className="text-muted-foreground m-2 z-10" >You can always change your currency in settings.</p>
            <Link href="/dashboard" className="mt-4 bg-emerald-700 text-white p-2 px-3 rounded-md z-10 w-full max-w-[400px] text-center">
                I&apos;m done! take me to the dashboard  🚀
            </Link>
            
            </div>
        </div>
    )
}

export default page