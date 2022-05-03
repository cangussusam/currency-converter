import { CurrencyValidation } from "../validation/currency-validation.js";
import { currencyNames } from "../api/currency-names-api.js";
import { Converter } from "../api/currency-api.js";
import { CurrencyError } from "../view/currency-error.js";
import { CurrencySwap } from "../view/currency-swap.js";
export class CurrencyController {
    constructor() {
        this.tSrcInput = document.querySelector('#token__source');
        this.tDestInput = document.querySelector('#token__destination');
        this.srcOptions = document.querySelector('#currencies__src');
        this.destOptions = document.querySelector('#currencies__dest');
        this.mensage = document.querySelector('.mensage__paragraph');
        this.validSrcCurrency = false;
        this.validDestCurrency = false;
    }
    curSrc() {
        if (!CurrencyValidation.isAValidCode(this.srcOptions, 'inputSource')) {
            return;
        }
        this.convert(this.tSrcInput, this.tDestInput);
    }
    curDest() {
        if (!CurrencyValidation.isAValidCode(this.destOptions, 'inputDestination')) {
            return;
        }
        this.convert(this.tSrcInput, this.tDestInput);
    }
    tokenSrc() {
        if (!CurrencyValidation.isANumber(this.tSrcInput.value)) {
            CurrencyError.error(this.mensage, false);
            this.validSrcCurrency = false;
            return;
        }
        this.validSrcCurrency = true;
        this.convert(this.tSrcInput, this.tDestInput);
    }
    tokenDest() {
        if (!CurrencyValidation.isANumber(this.tDestInput.value)) {
            CurrencyError.error(this.mensage, false);
            this.validDestCurrency = false;
            return;
        }
        this.validDestCurrency = true;
        this.convert(this.tDestInput, this.tSrcInput);
    }
    swap() {
        CurrencySwap.swapTokens(this.srcOptions, this.destOptions);
        this.convert(this.tSrcInput, this.tDestInput);
    }
    getNames() {
        currencyNames.getCurrencyNames(this.srcOptions, 'inputSource');
        currencyNames.getCurrencyNames(this.destOptions, 'inputDestination');
        setTimeout(() => {
            CurrencyValidation.default('inputSource', 'BRL');
            CurrencyValidation.default('inputDestination', 'USD');
        }, 250);
    }
    convert(source, destination) {
        if (this.validSrcCurrency || this.validDestCurrency) {
            this.mensage.innerHTML = '';
            this.mensage.classList.remove('error');
            Converter.currencyConverter(parseInt(source.value), this.srcOptions.value, this.destOptions.value, destination);
        }
        else {
            CurrencyError.error(this.mensage, true);
            return;
        }
    }
}
