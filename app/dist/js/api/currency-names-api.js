var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class currencyNames {
    static getCurrencyNames(input, cls) {
        return __awaiter(this, void 0, void 0, function* () {
            return fetch('https://openexchangerates.org/api/currencies.json')
                .then(res => res.json())
                .then((allData) => {
                Object.keys(allData).forEach(item => {
                    const option = document.createElement('option');
                    option.innerHTML = item;
                    option.classList.add(cls);
                    input.appendChild(option);
                });
                return;
            });
        });
    }
}
