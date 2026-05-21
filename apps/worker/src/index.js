const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  // eslint-disable-next-line no-console
  console.log("[worker] starting");

  const iterations = process.env.ITERATIONS ? Number(process.env.ITERATIONS) : 5;
  const intervalMs = process.env.INTERVAL_MS ? Number(process.env.INTERVAL_MS) : 750;

  for (let i = 1; i <= iterations; i += 1) {
    // eslint-disable-next-line no-console
    console.log(`[worker] tick ${i}/${iterations} @ ${new Date().toISOString()}`);
    await sleep(intervalMs);
  }

  // eslint-disable-next-line no-console
  console.log("[worker] done");
}

main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error("[worker] fatal", error);
  process.exitCode = 1;
});

