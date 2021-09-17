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
  toShowAmount.innerHTML =  amountInput.value;
  toShowBase.textContent =     baseCurrencyInput.value 
  + ' = ';
  toShowSecond.textContent =  secondCurrencyInput.value;
  toShowResult.textContent =  calculateNewAmount(
    baseCurrencyInput.value,
    amountInput.value,
    secondCurrencyInput.value
  );
}

function calculateNewAmount(fromUnit, fromValue, toUnit) {
  const crrncy = {
    EUR: { PLN: 4.15, USD: 0.83 },
    USD: { PLN: 3.45, EUR: 1.2 },
  };

  if (fromUnit == toUnit) {
    return fromValue;
  }

  if (crrncy[fromUnit]) {
    return fromUnit * crrncy[fromUnit][toUnit];
  }

  return fromValue * (1 / crrncy[toUnit][fromUnit]);
}



btn.addEventListener("click", convertCurrency);



