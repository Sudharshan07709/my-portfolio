export async function POST(req: Request) {
  try {
    const data = await req.json();

    const payload = {
      event: data.event,
      name: data.name || "",
      email: data.email || "",
      message: data.message || "",
      userAgent: req.headers.get("user-agent") || "",
      ip: req.headers.get("x-forwarded-for") || "localhost",
      extra: data.extra || "",
    };

    await fetch("http://localhost:5680/webhook/portfolio-analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("TRACK ERROR:", err);
    return Response.json({ ok: false }, { status: 500 });
  }
}
