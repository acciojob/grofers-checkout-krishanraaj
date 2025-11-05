document.getElementById("calc-btn").addEventListener("click", function () {
  // Get all cells with class "price"
  const prices = document.querySelectorAll(".price");
  let total = 0;

  // Read updated values from the table
  prices.forEach(cell => {
    const value = parseFloat(cell.textContent.trim());
    if (!isNaN(value)) total += value;
  });

  // Display total inside #ans
  document.getElementById("ans").textContent = total;
});
