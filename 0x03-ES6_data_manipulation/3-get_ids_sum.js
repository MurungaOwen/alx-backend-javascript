export default function getStudentIdsSum(arrayFrom){
    if(Array.isArray(arrayFrom)){
        const sum = arrayFrom.reduce((prev,curre) =>{
            return prev + curre;
        });
        console.log("sum is " + sum);
        return sum;
    }
    return []
}