var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CurrencyMensage } from "../view/currency-convert-mensage.js";
export class Converter {
    static currencyConverter(amount, sourceCurrency, destCurrency, input) {
        return __awaiter(this, void 0, void 0, function* () {
            sourceCurrency = encodeURIComponent(sourceCurrency);
            destCurrency = encodeURIComponent(destCurrency);
            const query = sourceCurrency + '_' + destCurrency;
            const apiKey = '1e80b8d4ccdb5604f4cc';
            const url = 'https://free.currconv.com/api/v7/convert?q=' + query + '&compact=ultra&apiKey=' + apiKey;
            console.log(url);
            return fetch(url)
                .then(res => res.json())
                .then(data => {
                Object.keys(data).map(item => {
                    const value = amount * data[item].toFixed(2);
                    input.value = value.toString();
                    CurrencyMensage.mensage(sourceCurrency, destCurrency, amount.toString(), value.toString());
                });
            });
        });
    }
}
