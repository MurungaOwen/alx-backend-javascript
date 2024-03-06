export default function signUpUser(firstName, lastName) {
    const signPromise = new Promise( (resolve,reject) =>{
        resolve({"firstName": firstName, "lastName": lastName});
        reject(Error(""));
    });
    return signPromise
}
