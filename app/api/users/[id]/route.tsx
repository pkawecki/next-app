import { NextRequest, NextResponse } from "next/server";

export function GET(
    request: NextRequest,
    { params }: { params: { id: number } }) {
    return NextResponse.json({ error: "user not found", msg: params.id, othermsg: new Date().toLocaleTimeString() })
}
