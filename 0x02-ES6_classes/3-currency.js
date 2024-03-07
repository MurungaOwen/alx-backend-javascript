export default class Currency {
    constructor(code, name) {
        this._code = code;
        this._name = name;
    }
    get code() {
        return this._code;
    }
    get name() {
        return this._name;
    }
    set code(newCode) {
        if (typeof newCode !== "string") {
            throw new TypeError("code must be string");
        }
        this._code = newCode;
    }
    set name(newName) {
        if (typeof newName !== "string") {
            throw new TypeError("name must be string");
        }
        this._name = newName;
    }
    displayFullCurrency(){
        const curr = `${this._name} (${this._code})`;
        return curr;
    }
}