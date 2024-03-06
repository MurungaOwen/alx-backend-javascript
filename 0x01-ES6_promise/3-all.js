import { createUser, uploadPhoto } from "./utils";

export default function handleProfileSignup() {
    const photo = uploadPhoto().then( (res) => {
        return res.body;
    }).catch( () => {
        throw Error("")
    });
    
    const fname = createUser().then( (res) => {
        return res.firstName + " " + res.lastName;
    }).catch( () => {
        throw Error("")
    });
    let names=photo.then( (res)=>{res});
    console.log(`photo is ${names}`);
    return [photo, fname];
 }