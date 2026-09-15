// ==========================================
// RENDER & INITIALIZE EXPERIENCE TABS
// ==========================================
const tabsContainer = document.getElementById("exp-tabs-list");
const panelsContainer = document.getElementById("exp-panels-list");
const highlight = document.querySelector(".divider-highlight");

if (tabsContainer && panelsContainer && typeof experienceData !== "undefined") {
  // Clear any structural placeholders safely
  // (Keep highlight bar by removing only button elements)
  const structuralButtons = tabsContainer.querySelectorAll("button");
  for (const btn of structuralButtons) btn.remove();
  panelsContainer.innerText = "";

  // 1. Generate Elements using for...of loop
  for (const [i, exp] of experienceData.entries()) {
    const isFirst = i === 0;

    // --- Create Tab Button ---
    const button = document.createElement("button");
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", isFirst ? "true" : "false");
    button.setAttribute("aria-controls", `exp-panel-${i}`);
    button.id = `tab-${i}`;
    button.innerText = exp.company;
    tabsContainer.append(button);

    // --- Create Content Panel ---
    const article = document.createElement("article");
    article.id = `exp-panel-${i}`;
    article.setAttribute("role", "tabpanel");
    article.setAttribute("aria-labelledby", `tab-${i}`);
    article.className = isFirst ? "exp-panel active" : "exp-panel";

    const header = document.createElement("header");

    const h2 = document.createElement("h2");
    h2.innerText = `${exp.role} @ ${exp.company}`;

    const pDate = document.createElement("p");
    pDate.className = "date";
    pDate.innerText = exp.date;

    header.append(h2, pDate);

    const ul = document.createElement("ul");
    for (const bulletText of exp.bullets) {
      const li = document.createElement("li");
      li.innerText = bulletText;
      ul.append(li);
    }

    article.append(header, ul);
    panelsContainer.append(article);
  }

  // 2. Query and bind events now that elements exist in the DOM
  const tabs = tabsContainer.querySelectorAll("[role='tab']");
  const panels = panelsContainer.querySelectorAll("[role='tabpanel']");

  for (const [i, tab] of tabs.entries()) {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("aria-controls");

      for (const t of tabs) t.setAttribute("aria-selected", "false");
      for (const p of panels) p.classList.remove("active");

      tab.setAttribute("aria-selected", "true");

      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add("active");

      // Move highlight bar
      const offset = tab.offsetTop;
      if (highlight) {
        if (i === tabs.length - 1) {
          const tabsHeight = tab.parentElement.offsetHeight;
          const highlightHeight = highlight.offsetHeight;
          highlight.style.transform = `translateY(${tabsHeight - highlightHeight}px)`;
        } else {
          highlight.style.transform = `translateY(${offset}px)`;
        }
      }
    });
  }
}

// 1. Render Projects
const projectContainer = document.getElementById("project-list");
projectContainer.innerText = ""; // Clear out any placeholder text safely

for (const proj of projectsData) {
  // Create HTML layout pieces
  const article = document.createElement("article");
  article.className = "project-card";

  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src = proj.img;
  img.alt = `${proj.title} preview`;
  img.className = "project-thumb";

  const figcaption = document.createElement("figcaption");
  figcaption.className = "project-info";

  const h4 = document.createElement("h4");
  h4.innerText = proj.title; // Safely set text

  const p = document.createElement("p");
  p.innerText = proj.desc; // Safely set text

  const tagsDiv = document.createElement("div");
  tagsDiv.className = "tags";
  tagsDiv.innerText = proj.tags.join(" • "); // Safely set text

  // Assemble the card
  figcaption.append(h4, p, tagsDiv);
  figure.append(img, figcaption);
  article.append(figure);

  // Append card to main container
  projectContainer.append(article);
}

// 2. Render Case Studies
const caseStudyContainer = document.getElementById("case-study-list");
caseStudyContainer.innerText = ""; // Clear out any placeholder text safely

for (const caseStudy of caseStudiesData) {
  const article = document.createElement("article");
  article.className = "case-study";

  const header = document.createElement("header");

  const h4 = document.createElement("h4");
  h4.innerText = caseStudy.title; // Safely set text

  const p = document.createElement("p");
  p.innerText = caseStudy.desc; // Safely set text

  const footer = document.createElement("footer");

  const link = document.createElement("a");
  link.href = caseStudy.link;
  link.className = "case-link";
  link.innerText = "Read Case Study →"; // Safely set text

  // Assemble the card
  header.append(h4);
  footer.append(link);
  article.append(header, p, footer);

  // Append card to main container
  caseStudyContainer.append(article);
}
