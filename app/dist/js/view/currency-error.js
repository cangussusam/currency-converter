export class CurrencyError {
    static error(input, type) {
        if (input) {
            if (type) {
                input.innerHTML = 'Insert a number.';
                input.classList.add('error');
            }
            else if (!type) {
                input.innerHTML = "This isn't a number.";
                input.classList.add('error');
            }
        }
    }
}
