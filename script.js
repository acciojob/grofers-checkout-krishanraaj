// Wait until the DOM is fully loaded
window.addEventListener("DOMContentLoaded", () => {

  // Select all elements with class "prices"
  const priceElements = document.querySelectorAll(".prices");

  let total = 0;

  // Sum up all prices
  priceElements.forEach((priceCell) => {
    const value = parseFloat(priceCell.textContent);
    if (!isNaN(value)) {
      total += value;
    }
  });

  // Create a new table row for the total
  const table = document.getElementById("groceryTable");
  const tbody = table.querySelector("tbody");
  const totalRow = document.createElement("tr");

  // Create one cell that spans both columns
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: ₹${total}`;
  totalCell.style.fontWeight = "bold";
  totalCell.style.backgroundColor = "#d1e7dd";

  // Add the new row and cell to the table
  totalRow.appendChild(totalCell);
  tbody.appendChild(totalRow);

});
