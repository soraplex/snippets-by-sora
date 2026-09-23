const API_URL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd";

const coinMeta = {
  bitcoin: { name: "Bitcoin", symbol: "BTC", color: "#f7931a", bg: "#2a1a05" },
  ethereum: { name: "Ethereum", symbol: "ETH", color: "#627eea", bg: "#0f1230" },
  solana: { name: "Solana", symbol: "SOL", color: "#9945ff", bg: "#160a2a" },
};

// Format price with commas + 2 decimals
function formatPrice(value) {
  return (
    "$" +
    value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}

// Build a table row using ONLY createElement + innerText
function createRow(id, price) {
  const meta = coinMeta[id];
  const tr = document.createElement("tr");

  // --- Coin cell ---
  const tdCoin = document.createElement("td");
  const coinCell = document.createElement("div");
  coinCell.className = "coin-cell";

  const icon = document.createElement("div");
  icon.className = "coin-icon";
  icon.style.background = meta.bg;
  icon.style.color = meta.color;
  icon.innerText = meta.symbol[0];

  const info = document.createElement("div");

  const name = document.createElement("div");
  name.className = "coin-name";
  name.innerText = meta.name;

  const symbol = document.createElement("div");
  symbol.className = "coin-symbol";
  symbol.innerText = meta.symbol;

  info.appendChild(name);
  info.appendChild(symbol);

  coinCell.appendChild(icon);
  coinCell.appendChild(info);
  tdCoin.appendChild(coinCell);
  tr.appendChild(tdCoin);

  // --- Price cell ---
  const tdPrice = document.createElement("td");
  tdPrice.className = "num price";
  tdPrice.innerText = formatPrice(price);
  tdPrice.dataset.price = price; // store last price
  tr.appendChild(tdPrice);

  return tr;
}

async function fetchPrices() {
  const statusEl = document.getElementById("status");
  const tbody = document.getElementById("table-body");

  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();

    // If first load: remove skeleton rows
    if (tbody.children[0]?.classList.contains("skeleton")) {
      while (tbody.firstChild) tbody.removeChild(tbody.firstChild);
    }

    // Update or create rows
    for (const id of Object.keys(data)) {
      const newPrice = data[id].usd;

      // Find existing row
      const existingRow = [...tbody.children].find((row) => row.firstChild.innerText.includes(coinMeta[id].name));

      if (existingRow) {
        const priceCell = existingRow.children[1];
        const oldPrice = parseFloat(priceCell.dataset.price);

        priceCell.dataset.price = newPrice;
        priceCell.innerText = formatPrice(newPrice);

        // Animate price change
        if (newPrice > oldPrice) {
          priceCell.classList.add("price-change-up");
          setTimeout(() => priceCell.classList.remove("price-change-up"), 600);
        } else if (newPrice < oldPrice) {
          priceCell.classList.add("price-change-down");
          setTimeout(() => priceCell.classList.remove("price-change-down"), 600);
        }
      } else {
        tbody.appendChild(createRow(id, newPrice));
      }
    }

    // Update status
    const now = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    statusEl.className = "ok";
    statusEl.innerText = `Updated ${now}`;
  } catch (err) {
    statusEl.className = "error";
    statusEl.innerText = `Error: ${err.message}`;

    // Clear table and show fallback
    while (tbody.firstChild) tbody.removeChild(tbody.firstChild);

    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 2;
    td.style.textAlign = "center";
    td.style.color = "#6b6b75";
    td.style.padding = "32px";
    td.innerText = "Could not load prices. CoinGecko may be rate-limiting — try again shortly.";

    tr.appendChild(td);
    tbody.appendChild(tr);
  }
}

// Initial load
fetchPrices();

// Auto-refresh every 10 seconds
setInterval(fetchPrices, 10000);
