export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("Received from website:", data);

    // Build clean unified payload for n8n analytics + email + sheets
    const payload = {
      event: "contact_form",
      name: data.name || "",
      email: data.email || "",
      message: data.message || "",
    };

    const n8nWebhookUrl =
      "http://localhost:5680/webhook/a5550d56-c18f-4857-b86d-6de7b96858c4";

    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const n8nResult = await n8nResponse.text();
    console.log("N8N replied:", n8nResult);

    return Response.json({ success: true, forwarded: true });
  } catch (err) {
    console.error("API ERROR:", err);
    return Response.json(
      { success: false, error: "Server error in /api/contact" },
      { status: 500 }
    );
  }
}
