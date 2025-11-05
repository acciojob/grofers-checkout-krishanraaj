document.getElementById("calc-btn").addEventListener("click", () => {
  // Get all elements with class "price"
  const priceCells = document.querySelectorAll(".price");
  let total = 0;

  // Use innerText to ensure we read dynamically edited values
  priceCells.forEach(cell => {
    const value = Number(cell.innerText.trim());
    if (!isNaN(value)) total += value;
  });

  // Display total inside h3#ans
  document.getElementById("ans").textContent = total;
});
