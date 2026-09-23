/**
 * DYNAMIC CATALOG DATASET
 */
const catalogItems = [
  {
    id: "1",
    title: "Le Mans Graphic Tee",
    text: "This is a card without a button featuring an iconic vintage graphic layout.",
    price: "20.00",
    imageUrl: "https://img.abercrombie.com/is/image/anf/KIC_123-4222-00226-903_prod1.jpg?policy=product-large",
    imageAlt: "Vintage black t-shirt featuring 24 Heures du Mans 1994 racing graphics",
    hasButton: false,
  },
  {
    id: "2",
    title: "Le Mans Graphic Tee",
    text: "This is a card with a button cleanly aligned to the left layout margin.",
    imageUrl: "https://img.abercrombie.com/is/image/anf/KIC_123-4222-00226-903_prod1.jpg?policy=product-large",
    imageAlt: "Vintage black t-shirt featuring 24 Heures du Mans 1994 racing graphics",
    hasButton: true,
    buttonStyle: "left-align",
    buttonText: "Buy",
  },
  {
    id: "3",
    title: "Le Mans Graphic Tee",
    text: "This is a card with a high-contrast full width call-to-action button layout.",
    imageUrl: "https://img.abercrombie.com/is/image/anf/KIC_123-4222-00226-903_prod1.jpg?policy=product-large",
    imageAlt: "Vintage black t-shirt featuring 24 Heures du Mans 1994 racing graphics",
    hasButton: true,
    buttonStyle: "full-width",
    buttonText: "Buy",
  },
  {
    id: "4",
    title: "Le Mans Graphic Tee",
    text: "This is a fully-loaded catalog layout containing a title, item pricing tracker data, paragraph descriptions, and an active full-width action button.",
    price: "20.00",
    imageUrl: "https://img.abercrombie.com/is/image/anf/KIC_123-4222-00226-903_prod1.jpg?policy=product-large",
    imageAlt: "Vintage black t-shirt featuring 24 Heures du Mans 1994 racing graphics",
    hasButton: true,
    buttonStyle: "full-width",
    buttonText: "Buy Now",
  },
];

/**
 * INITIALIZATION ENGINE
 */
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".catalog-grid");

  if (!container) return;
  container.innerHTML = "";

  // Iterates using the procedural style block loop
  for (const item of catalogItems) {
    let card = document.createElement("article");
    card.className = "card";

    let mediaBox = document.createElement("figure");
    mediaBox.className = "card-media";

    let image = document.createElement("img");
    image.className = "card-image";
    image.src = item.imageUrl;
    image.alt = item.imageAlt;
    image.loading = "lazy";
    mediaBox.appendChild(image);
    card.appendChild(mediaBox);

    let contentBox = document.createElement("div");
    contentBox.className = "card-content";

    let header = document.createElement("header");
    header.className = "card-header";

    let title = document.createElement("h2");
    title.className = "card-title";
    title.textContent = item.title;
    header.appendChild(title);

    if (item.price) {
      let price = document.createElement("data");
      price.className = "card-price";
      price.value = item.price;
      price.textContent = `$${parseInt(item.price, 10)}`;
      header.appendChild(price);
    }
    contentBox.appendChild(header);

    let text = document.createElement("p");
    text.className = "card-text";
    text.textContent = item.text;
    contentBox.appendChild(text);

    if (item.hasButton) {
      let actions = document.createElement("div");
      actions.className = "card-actions";

      // FIXED: Kept the action block as a semantic button element
      let button = document.createElement("button");
      button.className = "btn";
      button.textContent = item.buttonText || "Buy";

      if (item.buttonStyle === "left-align") {
        actions.className = "card-actions align-left";
      } else if (item.buttonStyle === "full-width") {
        button.className = "btn w-full";
      }

      actions.appendChild(button);
      contentBox.appendChild(actions);
    }

    card.appendChild(contentBox);
    container.appendChild(card);
  }
});