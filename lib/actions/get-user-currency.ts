import { auth } from "@clerk/nextjs/server";
import User from "@/models/User";
import { connectToDB } from "@/lib/dbConnect";

export async function getUserCurrency() {
  const { userId } = await auth();
  if (!userId) return null;

  await connectToDB();
  const user = await User.findOne({ id: userId });
  return user?.currency || null;
}
