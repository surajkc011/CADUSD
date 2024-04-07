// Function to convert currency
function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const currencyFrom = document.getElementById("currencyFrom").value;
    const currencyTo = document.getElementById("currencyTo").value;

    // Exchange rates (hard-coded for demonstration)
    const usdToCadRate = 1.25;
    const cadToUsdRate = 0.8;

    let convertedValue;

    if (currencyFrom === "USD") {
        convertedValue = (amount * usdToCadRate).toFixed(3);
    } else if (currencyFrom === "CAD") {
        convertedValue = (amount * cadToUsdRate).toFixed(3);
    }

    document.getElementById("convertedValue").value = convertedValue;
}
