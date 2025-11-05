document.getElementById("calc-btn").addEventListener("click", function () {
  // Select all price cells
  const prices = document.querySelectorAll(".price");

  // Compute total dynamically
  let total = 0;
  prices.forEach(cell => {
    let val = parseFloat(cell.textContent.trim());
    if (!isNaN(val)) total += val;
  });

  // Display the total inside #ans
  const ans = document.getElementById("ans");
  ans.textContent = total;
});
