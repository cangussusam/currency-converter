export class CurrencyMensage {
    static mensage(sourceCurrency, destCurrency, sourceToken, destToken) {
        const mensage = document.querySelector('.mensage__paragraph');
        if (mensage)
            mensage.innerHTML = `${sourceToken} ${sourceCurrency}'s is equal to ${destToken} ${destCurrency}'s.`;
    }
}
