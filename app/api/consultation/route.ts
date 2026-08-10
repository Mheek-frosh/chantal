import { NextResponse } from "next/server";
import { consultationSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = consultationSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ success: false, errors: parsed.error.flatten().fieldErrors }, { status: 400 });

    // Connect an approved CRM or transactional email service here in production.
    // Keep provider credentials in server-side environment variables—never client code.
    await new Promise((resolve) => setTimeout(resolve, 650));
    return NextResponse.json({ success: true, reference: `SH-${Date.now()}` });
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request." }, { status: 400 });
  }
}

