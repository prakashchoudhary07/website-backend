/* eslint-disable security/detect-object-injection */
/**
 * Check if balance is available to make successful transaction
 * @param {Object} debit - amount to be deduced (coins object)
 * @param {Object} available - actual amount avaliable (conins object)
 */
function checkSufficientAmountAvaliable (debit, available) {
  let isCurrenciesSufficient = true
  for (const key in debit) {
    if (Object.hasOwnProperty.call(debit, key) && Object.hasOwnProperty.call(available, key)) {
      const debitCurrency = debit[key]
      const availableCurrency = available[key]
      if (!(debitCurrency <= availableCurrency)) {
        isCurrenciesSufficient = false
      }
    } else {
      isCurrenciesSufficient = false
    }
  }
  return isCurrenciesSufficient
}

/**
 * Returns the updated balance after deducing the amount from the user's coins
 * @param {Object} debit - amount to be deduced (coins object)
 * @param {Object} available - actual amount avaliable (conins object)
 */
function debitCoins (debit, available) {
  const currencies = {}

  for (const key in available) {
    if (Object.hasOwnProperty.call(available, key)) {
      const debitCurrency = debit[key]
      const availableCurrency = available[key]
      currencies[key] = availableCurrency - (debitCurrency || 0)
    }
  }
  return currencies
}

module.exports = {
  checkSufficientAmountAvaliable,
  debitCoins
}
