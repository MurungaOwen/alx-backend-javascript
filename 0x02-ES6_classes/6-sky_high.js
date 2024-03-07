import Building from "./5-building";
export default class SkyHighBuilding extends Building {
    constructor(sqft,floors) {
        super(Building);
        this._sqft = sqft
        this._floors = floors;
    }
    get sqft() {
        return this._sqft;
    }
    set sqft(newSqft) {
        if(typeof this.sqft !== "number") {
            throw new TypeError("sqft must be a number");
        }
        this._sqft = newSqft;
    }
    get floors(){
        return this._floors
    }
    set floors(newFloors) {
        if(typeof newFloors !== "number") {
            throw new TypeError("Evacuate slowly the NUMBER_OF_FLOORS floors");
        }
        this._floors = this.floors;
    }
    evacuationWarningMessage() {
        const msg = "Evacuate slowly the NUMBER_OF_FLOORS floors";
        return msg;
    }
}