import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 3001;

app.use(
  cors({
    origin: true
  })
);
app.use(express.json({ limit: "1mb" }));

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    service: "backend",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/echo", (req, res) => {
  res.json({
    ok: true,
    query: req.query ?? {},
    headers: {
      "user-agent": req.get("user-agent")
    }
  });
});

app.post("/api/jobs", (req, res) => {
  const job = {
    id: `job_${Math.random().toString(16).slice(2)}`,
    type: req.body?.type ?? "example",
    payload: req.body?.payload ?? null,
    createdAt: new Date().toISOString()
  };

  res.status(201).json({ ok: true, job });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`[backend] listening on http://localhost:${port}`);
});

