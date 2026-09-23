/**
 * DYNAMIC PORTFOLIO DATASET
 */
const portfolioItems = [
  {
    title: "Portfolio Website",
    description: "A modern dark‑mode portfolio built with React, Vite, and ChakraUI.",
    imageUrl: "https://thumb.photo-ac.com/7f/7fbd43061d99faf0799f0cbd1791fc4c_t.jpeg",
    imageAlt: "Portfolio Web Design Preview Mockup",
    primaryBtnText: "Live Demo",
    secondaryBtnText: "View Code",
  },
  {
    title: "E-Commerce App",
    description:
      "A robust storefront featuring seamless Stripe configurations and real-time dashboard tracking metrics.",
    imageUrl: "https://thumb.photo-ac.com/7f/7fbd43061d99faf0799f0cbd1791fc4c_t.jpeg",
    imageAlt: "E-Commerce Digital Storefront Preview Mockup",
    primaryBtnText: "Live Demo",
    secondaryBtnText: "View Code",
  },
  {
    title: "AI Analytics Matrix",
    description: "An enterprise data reporting canvas utilizing predictive modeling algorithms and streaming APIs.",
    imageUrl: "https://thumb.photo-ac.com/7f/7fbd43061d99faf0799f0cbd1791fc4c_t.jpeg",
    imageAlt: "Data Intelligence Dashboard Interface Preview Mockup",
    primaryBtnText: "Live Demo",
    secondaryBtnText: "View Code",
  },
];

/**
 * COMPONENT RENDERING ENGINE
 */
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".portfolio-grid");

  if (!container) return;
  container.innerHTML = "";

  // Iterates using the explicit variable assignment loop format
  for (const item of portfolioItems) {
    let card = document.createElement("article");
    card.className = "project-card";

    let mediaBox = document.createElement("figure");
    mediaBox.className = "project-media";

    let image = document.createElement("img");
    image.className = "project-image";
    image.src = item.imageUrl;
    image.alt = item.imageAlt;
    image.loading = "lazy";
    mediaBox.appendChild(image);
    card.appendChild(mediaBox);

    let contentBox = document.createElement("div");
    contentBox.className = "project-content";

    let title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = item.title;
    contentBox.appendChild(title);

    let desc = document.createElement("p");
    desc.className = "project-description";
    desc.textContent = item.description;
    contentBox.appendChild(desc);

    let buttonRow = document.createElement("div");
    buttonRow.className = "button-row";

    let primaryBtn = document.createElement("button");
    primaryBtn.className = "btn-primary";
    primaryBtn.textContent = item.primaryBtnText;
    buttonRow.appendChild(primaryBtn);

    let secondaryBtn = document.createElement("button");
    secondaryBtn.className = "btn-outline";
    secondaryBtn.textContent = item.secondaryBtnText;
    buttonRow.appendChild(secondaryBtn);

    contentBox.appendChild(buttonRow);
    card.appendChild(contentBox);
    container.appendChild(card);
  }
});