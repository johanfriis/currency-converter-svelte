import CurrencyConverter from './CurrencyConverter.html';

function addCurrencyConverter(options) {
  const currencyConverter = new CurrencyConverter({
    target: document.querySelector('.' + options.target),
    data: {
      amount: options.amount,
      from: options.from,
      to: options.to,
      label: options.label
    }
  });
}

export default addCurrencyConverter;
