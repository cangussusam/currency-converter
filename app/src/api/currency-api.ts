//free-key to run the api converter: 1e80b8d4ccdb5604f4cc 

import { CurrencyMensage } from "../view/currency-convert-mensage.js";

export class Converter {

    static async currencyConverter(amount:number, sourceCurrency:string, destCurrency:string,
         input: HTMLInputElement): Promise<any>{
        
        sourceCurrency = encodeURIComponent(sourceCurrency)
        destCurrency = encodeURIComponent(destCurrency)
        const query = sourceCurrency + '_' + destCurrency
        const apiKey = '1e80b8d4ccdb5604f4cc'

        const url = 'https://free.currconv.com/api/v7/convert?q='+ query + '&compact=ultra&apiKey=' + apiKey;
        console.log(url)
        
        return fetch(url)
            .then(res => res.json())
            .then(data => {
                Object.keys(data).map(item => {
                    const value = amount * data[item].toFixed(2)
                    input.value = value.toString()

                    CurrencyMensage.mensage(sourceCurrency, destCurrency, amount.toString(), value.toString())

                })
            })
    }
}