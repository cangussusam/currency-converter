

export class CurrencyValidation {

    static isAValidCode(input: HTMLSelectElement, cls: string):boolean{

        const codes = document.querySelectorAll(`.${cls}`)
        for(let i=0; i<codes.length; i++){
            if(codes[i].innerHTML === input.value) return true
        }
        return false   
    }

    static isANumber(value: string):boolean{

        const number = parseFloat(value)
        if(number) return true 

        return false
    }

    static default(cls: string, currency: string){

        const codes = document.querySelectorAll(`.${cls}`)
        codes.forEach(code => {
            if(code.innerHTML === currency) code.setAttribute('selected', 'selected')
        })
    }
}