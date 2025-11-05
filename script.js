// Select all price elements
const prices = document.querySelectorAll('.prices');

// Calculate total
let total = 0;
prices.forEach(price => {
  total += Number(price.textContent);
});

// Create a new row for total
const table = document.getElementById('grocery-table');
const newRow = document.createElement('tr');
const totalCell = document.createElement('td');

// Span across both columns and display total
totalCell.setAttribute('colspan', '2');
totalCell.textContent = `Total Price: ${total}`;

// Append the total row to the table
newRow.appendChild(totalCell);
table.appendChild(newRow);
