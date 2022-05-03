export class CurrencySwap {
    static swapTokens(srcInput, destInput) {
        const srcValue = srcInput.value;
        const destValue = destInput.value;
        srcInput.value = destValue;
        destInput.value = srcValue;
    }
}
