import { CurrencyValidation } from "../validation/currency-validation.js"
import { currencyNames } from "../api/currency-names-api.js"
import { Converter } from "../api/currency-api.js"
import { CurrencyError } from "../view/currency-error.js"
import { CurrencySwap } from "../view/currency-swap.js"


export class CurrencyController {

    private tSrcInput = document.querySelector('#token__source') as HTMLInputElement
    private tDestInput = document.querySelector('#token__destination') as HTMLInputElement
    private srcOptions = document.querySelector('#currencies__src') as HTMLSelectElement
    private destOptions = document.querySelector('#currencies__dest') as HTMLSelectElement
    private mensage = document.querySelector('.mensage__paragraph') as HTMLParagraphElement

    private validSrcCurrency: boolean = false
    private validDestCurrency: boolean = false

    public curSrc() {
        if (!CurrencyValidation.isAValidCode(this.srcOptions, 'inputSource')) {
            return
        }
        this.convert(this.tSrcInput, this.tDestInput)
    }

    public curDest() {
        if (!CurrencyValidation.isAValidCode(this.destOptions, 'inputDestination')) {
            return
        }
        this.convert(this.tSrcInput, this.tDestInput)
    }

    public tokenSrc() {

        if (!CurrencyValidation.isANumber(this.tSrcInput.value)) {
            CurrencyError.error(this.mensage, false)
            this.validSrcCurrency = false
            return
        }

        this.validSrcCurrency = true
        this.convert(this.tSrcInput, this.tDestInput)
    }

    public tokenDest() {

        if (!CurrencyValidation.isANumber(this.tDestInput.value)) {
            CurrencyError.error(this.mensage, false)
            this.validDestCurrency = false
            return
        }

        this.validDestCurrency = true
        this.convert(this.tDestInput, this.tSrcInput)
    }

    public swap() {
        CurrencySwap.swapTokens(this.srcOptions, this.destOptions)
        this.convert(this.tSrcInput, this.tDestInput)
    }

    public getNames() {
        currencyNames.getCurrencyNames(this.srcOptions, 'inputSource')
        currencyNames.getCurrencyNames(this.destOptions, 'inputDestination')
        setTimeout(() => {
            CurrencyValidation.default('inputSource', 'BRL')
            CurrencyValidation.default('inputDestination', 'USD')
        }, 250)
    }

    private convert(source: HTMLInputElement, destination: HTMLInputElement) {
        if (this.validSrcCurrency || this.validDestCurrency) {
            this.mensage.innerHTML = ''
            this.mensage.classList.remove('error')
            Converter.currencyConverter(
                parseInt(source.value),
                this.srcOptions.value,
                this.destOptions.value,
                destination)
        } else {
            CurrencyError.error(this.mensage, true)
            return
        }
    }
}
