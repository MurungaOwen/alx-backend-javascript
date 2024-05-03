function calculateNumber(type, a, b){
    // returns the rounded sum of two numbers
    if (type === "SUM") {
        return Math.round(a) + Math.round(b);
    } else if (type === "DIVIDE") {
        if (b === 0) {
            return 'Error';
        }
        return Math.round(a) / Math.round(b);

    } else if (type === "SUBTRACT") {
        return Math.round(a) - Math.round(b);
    } else {
        return 'Error';
    }

}
module.exports = calculateNumber
