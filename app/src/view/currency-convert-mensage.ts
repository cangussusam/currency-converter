
export class CurrencyMensage{

    static mensage(sourceCurrency:string, destCurrency:string,
        sourceToken: string, destToken: string){

            const mensage = document.querySelector('.mensage__paragraph')
            if(mensage) mensage.innerHTML = `${sourceToken} ${sourceCurrency}'s is equal to ${destToken} ${destCurrency}'s.`
    }

}