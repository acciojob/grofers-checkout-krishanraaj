// Select all elements with class "prices"
const priceCells = document.querySelectorAll(".prices");

let total = 0;

// Loop through all price cells and calculate total
priceCells.forEach((cell) => {
  const value = parseFloat(cell.textContent);
  if (!isNaN(value)) {
    total += value;
  }
});

// Create a new row for total
const table = document.getElementById("groceryTable");
const totalRow = document.createElement("tr");
totalRow.classList.add("total-row");

const totalCell = document.createElement("td");
totalCell.colSpan = 2; // span across both columns
totalCell.textContent = `Total Price: ₹${total}`;

// Append total row to table
totalRow.appendChild(totalCell);
table.appendChild(totalRow);
