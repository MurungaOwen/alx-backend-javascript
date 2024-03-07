import Currency from "./3-currency";
export default class Pricing {
    constructor(amount,currency) {
        this._amount = amount;
        this._currency = currency;
    }
    get amount() {
        return this._amount;
    }
    get currency() {
        return this._currency;
    }
    set amount(newamount) {
        if(typeof newamount !== "string") {
            throw new TypeError("amount must be string");
        }
        this._amount = newamount;
    }
    set currency(newCurrency) {
        if (!(currency instanceof Currency)) {
            throw new TypeError("currency is not instance of currency");
        }
        this._currency = newCurrency;
    }
    displayFullPrice() {
        const result = `${this._amount} ${this._currency.name} (${this._currency.code})`;
        return result
    }
}
