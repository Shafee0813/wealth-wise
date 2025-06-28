import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import User from "@/models/User";
import { connectToDB } from "@/lib/dbConnect";

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { currency } = await req.json();
  if (!currency) return NextResponse.json({ error: "Currency required" }, { status: 400 });

  await connectToDB();

  const user = await User.findOneAndUpdate(
    { id: userId },
    { currency },
    { upsert: true, new: true }
  );

  return NextResponse.json({ success: true, user });
}
