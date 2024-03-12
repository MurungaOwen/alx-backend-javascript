export default function cleanSet (set, startString) {
    if(set instanceof Set) {
        const filteredValues = Array.from(set).filter(value => value.startsWith(startString));
        if (startString === '') {
            return '';
          }
        if (filteredValues.length === 0) {
            return '';
        }
        return filteredValues.map(value => value.substring(startString.length)).join('-');
    }
    throw new Error("instance must be a set");
}