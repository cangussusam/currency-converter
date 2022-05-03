

export class CurrencySwap{

    static swapTokens(srcInput: HTMLSelectElement, destInput: HTMLSelectElement){
        const srcValue = srcInput.value
        const destValue = destInput.value

        srcInput.value = destValue
        destInput.value = srcValue
    }
}