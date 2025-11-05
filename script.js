document.getElementById('calc-btn').addEventListener('click', function () {
  const prices = document.querySelectorAll('.price');
  let total = 0;

  prices.forEach(price => {
    // Extract only digits (to handle extra typing or spaces)
    let text = price.textContent.replace(/[^0-9]/g, '');
    let value = parseFloat(text);

    if (!isNaN(value)) {
      total += value;
    }
  });

  document.getElementById('ans').textContent = total;
});
