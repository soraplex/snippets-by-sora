const API_URL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd";

const coinMeta = {
  bitcoin: { name: "Bitcoin", symbol: "BTC", color: "#f7931a", bg: "#2a1a05" },
  ethereum: { name: "Ethereum", symbol: "ETH", color: "#627eea", bg: "#0f1230" },
  solana: { name: "Solana", symbol: "SOL", color: "#9945ff", bg: "#160a2a" },
};

function formatPrice(value) {
  return (
    "$" +
    value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}

function createCard(id, price) {
  const meta = coinMeta[id];

  const card = document.createElement("article");
  card.className = "card";

  const icon = document.createElement("div");
  icon.className = "card-icon";
  icon.style.background = meta.bg;
  icon.style.color = meta.color;
  icon.innerText = meta.symbol[0];

  const info = document.createElement("div");
  info.className = "card-info";

  const name = document.createElement("div");
  name.className = "card-name";
  name.innerText = meta.name;

  const symbol = document.createElement("div");
  symbol.className = "card-symbol";
  symbol.innerText = meta.symbol;

  info.appendChild(name);
  info.appendChild(symbol);

  const priceEl = document.createElement("div");
  priceEl.className = "card-price";
  priceEl.innerText = formatPrice(price);
  priceEl.dataset.price = price;

  card.appendChild(icon);
  card.appendChild(info);
  card.appendChild(priceEl);

  return card;
}

async function fetchPrices() {
  const statusEl = document.getElementById("status");
  const grid = document.getElementById("card-grid");

  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();

    // First load: clear skeletons
    if (grid.children.length === 0) {
      grid.innerText = "";
    }

    for (const id of Object.keys(data)) {
      const newPrice = data[id].usd;

      const existingCard = [...grid.children].find(
        (card) => card.querySelector(".card-name").innerText === coinMeta[id].name,
      );

      if (existingCard) {
        const priceEl = existingCard.querySelector(".card-price");
        const oldPrice = parseFloat(priceEl.dataset.price);

        priceEl.dataset.price = newPrice;
        priceEl.innerText = formatPrice(newPrice);

        // Smooth fade animation (5 seconds)
        if (newPrice > oldPrice) {
          priceEl.classList.add("price-change-up");
          setTimeout(() => priceEl.classList.remove("price-change-up"), 5000);
        } else if (newPrice < oldPrice) {
          priceEl.classList.add("price-change-down");
          setTimeout(() => priceEl.classList.remove("price-change-down"), 5000);
        }
      } else {
        grid.appendChild(createCard(id, newPrice));
      }
    }

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
  }
}

fetchPrices();
setInterval(fetchPrices, 10000);
