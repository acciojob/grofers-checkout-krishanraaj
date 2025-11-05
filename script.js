document.getElementById('calc-btn').addEventListener('click', function () {
  const prices = document.querySelectorAll('.price');
  let total = 0;

  prices.forEach(price => {
    const value = parseFloat(price.textContent);
    if (!isNaN(value)) {
      total += value;
    }
  });

  document.getElementById('ans').textContent = total;
});
