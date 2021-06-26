const btn = document.querySelector(".calculate-btn");
const baseCurrencyInput = document.getElementById("currency-1");
const secondCurrencyInput = document.getElementById("currency-2");
const amountInput = document.getElementById("amount");
const toShowAmount = document.querySelector(".given-amount");
const toShowBase = document.querySelector(".base-currency");
const toShowSecond = document.querySelector(".second-currency");
const toShowResult = document.querySelector(".final-result");

function convertCurrency(event) {
  event.preventDefault();
  const amount = amountInput.value;
  const from = baseCurrencyInput.value;
  const to = secondCurrencyInput.value;
  const result = 0;

  toShowAmount.innerHTML = amount;
  toShowBase.textContent = from + " = ";
  toShowSecond.textContent = to;
  toShowResult.textContent = result;
}

function calculateNewAmount(fromUnit, fromValue, toUnit) {
  const crrncy = {
    EUR: { PLN: 4.15, USD: 0.83 },
    USD: { PLN: 3.45, EUR: 1.2 },
  };

  if (fromUnit == toUnit) {
    return fromUnit;
  }

  if (crrncy[fromUnit]) {
    return fromUnit * crrncy[fromUnit][toUnit];
  }

  return fromUnit * (1 / crrncy[toUnit][fromValue]);
}

btn.addEventListener("click", convertCurrency);
