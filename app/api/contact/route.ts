import { NextRequest, NextResponse } from "next/server";

const TO_EMAIL = "krishna.kr.1302@gmail.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const business = String(body.business || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const service = String(body.service || "").trim();
    const budget = String(body.budget || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured yet. Add RESEND_API_KEY to the server environment." },
        { status: 503 }
      );
    }

    const html = `
      <h2>New Webora Website Enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Business:</strong> ${escapeHtml(business)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone / WhatsApp:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Service:</strong> ${escapeHtml(service)}</p>
      <p><strong>Estimated Budget:</strong> ${escapeHtml(budget || "Not specified")}</p>
      <h3>Project details</h3>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || "Webora Website <onboarding@resend.dev>",
        to: [TO_EMAIL],
        reply_to: email,
        subject: `New Webora enquiry — ${business || name}`,
        html,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend error:", errorText);

      // Show the provider error during local development so configuration
      // problems can be fixed quickly. Keep production errors generic.
      if (process.env.NODE_ENV !== "production") {
        let detail = errorText;
        try {
          const parsed = JSON.parse(errorText);
          detail = parsed.message || parsed.error || errorText;
        } catch {
          // Keep the raw provider response when it is not JSON.
        }

        return NextResponse.json(
          { error: `Resend error: ${detail}` },
          { status: 502 }
        );
      }

      return NextResponse.json(
        { error: "We couldn't send your enquiry right now. Please try WhatsApp." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
