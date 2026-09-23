// Makes big numbers readable by adding commas
function addCommas(number) {
  return number.toLocaleString("en-US");
}

// Converts market cap into T / B / M (Trillion / Billion / Million)
function formatMarketCap(value) {
  if (value >= 1e12) return "$" + (value / 1e12).toFixed(2) + "T"; // trillion
  if (value >= 1e9) return "$" + (value / 1e9).toFixed(2) + "B"; // billion
  return "$" + (value / 1e6).toFixed(2) + "M"; // million
}

const tbody = document.getElementById("table-body");

for (const stock of stocks) {
  const tr = document.createElement("tr");

  // --- Company cell ---
  const tdCompany = document.createElement("td");
  const cell = document.createElement("div");
  cell.className = "ticker-cell";

  const badge = document.createElement("div");
  badge.className = "ticker-badge";
  badge.style.background = stock.bg;
  badge.style.color = stock.color;
  badge.innerText = stock.ticker.length > 4 ? stock.ticker.slice(0, 3) : stock.ticker;

  const info = document.createElement("div");

  const name = document.createElement("div");
  name.className = "ticker-name";
  name.innerText = stock.name;

  const ticker = document.createElement("div");
  ticker.className = "ticker-sector";
  ticker.innerText = stock.ticker;

  info.appendChild(name);
  info.appendChild(ticker);

  cell.appendChild(badge);
  cell.appendChild(info);
  tdCompany.appendChild(cell);
  tr.appendChild(tdCompany);

  // --- Price ---
  const tdPrice = document.createElement("td");
  tdPrice.className = "num price";
  tdPrice.innerText = "$" + addCommas(stock.price);
  tr.appendChild(tdPrice);

  // --- Change ---
  const tdChange = document.createElement("td");
  tdChange.className = "num";

  const pill = document.createElement("span");
  pill.className = "change-pill " + (stock.change >= 0 ? "up" : "down");
  pill.innerText = (stock.change >= 0 ? "▲ +" : "▼ ") + stock.change.toFixed(2) + "%";

  tdChange.appendChild(pill);
  tr.appendChild(tdChange);

  // --- Open ---
  const tdOpen = document.createElement("td");
  tdOpen.className = "num muted";
  tdOpen.innerText = "$" + addCommas(stock.open);
  tr.appendChild(tdOpen);

  // --- 52w High ---
  const tdHigh = document.createElement("td");
  tdHigh.className = "num muted";
  tdHigh.innerText = "$" + addCommas(stock.high52);
  tr.appendChild(tdHigh);

  // --- 52w Low ---
  const tdLow = document.createElement("td");
  tdLow.className = "num muted";
  tdLow.innerText = "$" + addCommas(stock.low52);
  tr.appendChild(tdLow);

  // --- Market Cap ---
  const tdCap = document.createElement("td");
  tdCap.className = "num muted";
  tdCap.innerText = formatMarketCap(stock.cap);
  tr.appendChild(tdCap);

  // --- P/E ---
  const tdPE = document.createElement("td");
  tdPE.className = "num pe";
  tdPE.innerText = addCommas(stock.pe);
  tr.appendChild(tdPE);

  // --- Sector ---
  const tdSector = document.createElement("td");
  const tag = document.createElement("span");
  tag.className = "tag";
  tag.innerText = stock.sector;
  tdSector.appendChild(tag);
  tr.appendChild(tdSector);

  tbody.appendChild(tr);
}