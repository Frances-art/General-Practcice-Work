const useDOM = () => {
  
  return {
    btn: document.querySelector(".calculate-btn"),
    baseCurrencyInput: document.getElementById("currency-1"),
    secondCurrencyInput: document.getElementById("currency-2"),
    amountInput: document.getElementById("amount"),
    toShowAmount: document.querySelector(".given-amount"),
    toShowBase: document.querySelector(".base-currency"),
    toShowSecond: document.querySelector(".second-currency"),
    toShowResult: document.querySelector(".final-result"),
  };
};


function convertCurrency(event) {
  event.preventDefault();
  useDOM().toShowAmount.innerHTML = useDOM().amountInput.value;
  useDOM().toShowBase.textContent = useDOM().baseCurrencyInput.value + " = ";
  useDOM().toShowSecond.textContent = useDOM().secondCurrencyInput.value;
  useDOM().toShowResult.textContent = calculateNewAmount(
    useDOM().baseCurrencyInput.value,
    useDOM().amountInput.value,
    useDOM().secondCurrencyInput.value
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

useDOM(). btn.addEventListener("click", convertCurrency);
