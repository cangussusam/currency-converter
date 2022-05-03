
export class currencyNames {

    static async getCurrencyNames(input: HTMLDataListElement, cls: string): Promise<any> {

        return fetch('https://openexchangerates.org/api/currencies.json')
            .then(res => res.json())
            .then((allData) => {
                Object.keys(allData).forEach(item => {
                    const option = document.createElement('option')
                    option.innerHTML = item
                    option.classList.add(cls)
                    input.appendChild(option)
                })
                return
            })
    }
}