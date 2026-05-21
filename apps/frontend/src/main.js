import "./styles.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <main class="container">
    <header class="header">
      <div class="badge">PlatformForge</div>
      <h1>Frontend</h1>
      <p class="subtle">Small Vite app scaffold.</p>
    </header>

    <section class="card">
      <h2>Health checks</h2>
      <div class="grid">
        <button id="ping-backend" class="btn">Ping backend</button>
        <pre id="backend-result" class="code">Click “Ping backend”.</pre>
      </div>
    </section>

    <footer class="footer">
      <span>Tip: run backend at http://localhost:3001</span>
    </footer>
  </main>
`;

const backendResult = document.querySelector("#backend-result");
document.querySelector("#ping-backend").addEventListener("click", async () => {
  backendResult.textContent = "Loading...";
  try {
    const response = await fetch("http://localhost:3001/health", {
      headers: { Accept: "application/json" }
    });
    const text = await response.text();
    backendResult.textContent = `${response.status} ${response.statusText}\n${text}`;
  } catch (error) {
    backendResult.textContent = String(error);
  }
});

