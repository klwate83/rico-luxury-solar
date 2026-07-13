import { NextResponse } from "next/server";
import { buildLeadReference, leadSchema } from "@/lib/lead";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = leadSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json({ success: false, error: "Invalid form data", details: parsed.error.flatten() }, { status: 400 });
    }

    const leadReference = buildLeadReference();

    // Integration points:
    // 1. Send to HubSpot/Zoho CRM.
    // 2. Trigger n8n webhook.
    // 3. Send customer confirmation email.
    // 4. Send internal notification.
    // 5. Store attribution and consent record.
    if (process.env.N8N_LEAD_WEBHOOK_URL) {
      await fetch(process.env.N8N_LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...parsed.data, leadReference })
      });
    }

    return NextResponse.json({ success: true, leadReference });
  } catch {
    return NextResponse.json({ success: false, error: "Unable to process enquiry" }, { status: 500 });
  }
}
