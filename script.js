// script.js
function convertCurrency() {
    // Obtiene el valor de la cantidad ingresada y la convierte a un número de punto flotante
    const inputAmount = parseFloat(document.getElementById('inputAmount').value);
    // Obtiene la moneda seleccionada
    const inputCurrency = document.getElementById('inputCurrency').value;

    // Tasas de cambio (estas tasas son ficticias y deben ser actualizadas según el mercado)
    const exchangeRates = {
        RUB: { CNY: 0.11, USD: 0.014 },
        CNY: { RUB: 9.09, USD: 0.15 },
        USD: { RUB: 71.43, CNY: 6.67 }
    };

    // Variables para almacenar las cantidades convertidas
    let rub, cny, usd;

    // Convierte la cantidad según la moneda seleccionada
    if (inputCurrency === 'RUB') {
        rub = inputAmount;
        cny = inputAmount * exchangeRates.RUB.CNY;
        usd = inputAmount * exchangeRates.RUB.USD;
    } else if (inputCurrency === 'CNY') {
        rub = inputAmount * exchangeRates.CNY.RUB;
        cny = inputAmount;
        usd = inputAmount * exchangeRates.CNY.USD;
    } else if (inputCurrency === 'USD') {
        rub = inputAmount * exchangeRates.USD.RUB;
        cny = inputAmount * exchangeRates.USD.CNY;
        usd = inputAmount;
    }

    // Actualiza los elementos del DOM con las cantidades convertidas
    document.getElementById('rubValue').innerText = `${rub.toFixed(2)} RUB`;
    document.getElementById('cnyValue').innerText = `${cny.toFixed(2)} CNY`;
    document.getElementById('usdValue').innerText = `${usd.toFixed(2)} USD`;
}