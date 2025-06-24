import { connectToDB } from "@/lib/dbConnect"

const page = async () => {
  await connectToDB()
    return (
      <div className="flex">
      </div>
    )
}
  
export default page