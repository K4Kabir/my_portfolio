import { NextResponse } from "next/server";
import { connect } from "../../../lib/connection";
import Email from "@/app/models/Email";

connect();

export async function POST(req) {
  try {
    let data = await req.json();
    let newEmail = await Email.create(data);
    if (newEmail) {
      return NextResponse.json(
        { message: "Email sent", success: true },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: error.message, success: false },
      { status: 500 }
    );
  }
}
