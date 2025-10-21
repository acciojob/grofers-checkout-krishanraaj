// Select all price elements
const priceElements = document.querySelectorAll(".prices");

let total = 0;

// Calculate the total sum of all prices
priceElements.forEach((priceCell) => {
  const value = parseFloat(priceCell.textContent);
  if (!isNaN(value)) {
    total += value;
  }
});

// Create a new row for the total
const table = document.getElementById("groceryTable");
const tbody = table.querySelector("tbody");
const totalRow = document.createElement("tr");

// Create one cell that spans both columns
const totalCell = document.createElement("td");
totalCell.colSpan = 2;
totalCell.textContent = `Total Price: ₹${total}`;
totalCell.style.fontWeight = "bold";
totalCell.style.backgroundColor = "#d1e7dd";

// Append the new row and cell
totalRow.appendChild(totalCell);
tbody.appendChild(totalRow);
