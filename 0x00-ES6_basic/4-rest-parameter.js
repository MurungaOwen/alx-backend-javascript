export default function returnHowManyArguments(...params) {
    var count = 0;
    var i;
    for(i in params){
        count += 1
    }
    return count
}