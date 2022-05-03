export class CurrencyValidation {
    static isAValidCode(input, cls) {
        const codes = document.querySelectorAll(`.${cls}`);
        for (let i = 0; i < codes.length; i++) {
            if (codes[i].innerHTML === input.value)
                return true;
        }
        return false;
    }
    static isANumber(value) {
        const number = parseFloat(value);
        if (number)
            return true;
        return false;
    }
    static default(cls, currency) {
        const codes = document.querySelectorAll(`.${cls}`);
        codes.forEach(code => {
            if (code.innerHTML === currency)
                code.setAttribute('selected', 'selected');
        });
    }
}
