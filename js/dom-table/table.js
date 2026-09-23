/**
 * REUSABLE DIRECTORY PAYLOAD DECK (LOCAL DATA STREAM)
 */
const mockUserStream = [
  {
    name: "Leanne Graham",
    username: "bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031",
    company: { name: "Romaguera-Crona" },
  },
  {
    name: "Ervin Howell",
    username: "antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593",
    company: { name: "Deckow-Crist" },
  },
  {
    name: "Clementine Bauch",
    username: "samantha",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    company: { name: "Romaguera-Jacobson" },
  },
  {
    name: "Patricia Lebsack",
    username: "karianne",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623",
    company: { name: "Robel-Corkery" },
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("directory-table-body");
  if (!tableBody) return;

  // Clear streaming placeholder text
  tableBody.innerHTML = "";

  // FIXED: Maps your requested procedural loop to construct semantic <tr> rows
  for (const user of mockUserStream) {
    let row = document.createElement("tr");

    let nameCell = document.createElement("td");
    nameCell.className = "directory-name";
    nameCell.textContent = user.name;
    row.appendChild(nameCell);

    let userCell = document.createElement("td");
    let userBadge = document.createElement("span");
    userBadge.className = "directory-username";
    userBadge.textContent = `@${user.username}`;
    userCell.appendChild(userBadge);
    row.appendChild(userCell);

    let emailCell = document.createElement("td");
    emailCell.className = "directory-email";
    emailCell.textContent = user.email.toLowerCase();
    row.appendChild(emailCell);

    let phoneCell = document.createElement("td");
    phoneCell.className = "directory-phone";
    phoneCell.textContent = user.phone;
    row.appendChild(phoneCell);

    let companyCell = document.createElement("td");
    companyCell.className = "directory-company";
    companyCell.textContent = user.company.name;
    row.appendChild(companyCell);

    let actionCell = document.createElement("td");
    let actionBtn = document.createElement("a");
    actionBtn.className = "directory-btn";
    actionBtn.href = `mailto:${user.email}`;
    actionBtn.textContent = "Email";
    actionCell.appendChild(actionBtn);
    row.appendChild(actionCell);

    tableBody.appendChild(row);
  }
});
