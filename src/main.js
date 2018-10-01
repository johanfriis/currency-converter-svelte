import CurrencyConverter from './CurrencyConverter.html'

function addCurrencyConverter(...args) {
  const options =
    args.length === 4
      ? {
          target: args[0],
          amount: args[1],
          from: 'GBP',
          to: args[2],
          label: args[3],
        }
      : args[0]

  new CurrencyConverter({
    target: document.querySelector('.' + options.target),
    data: {
      amount: options.amount,
      from: options.from,
      to: options.to,
      label: options.label,
    },
  })
}

export default addCurrencyConverter
