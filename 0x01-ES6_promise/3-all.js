import { createUser, uploadPhoto } from "./utils";

export default function handleProfileSignup() {
    let photo = uploadPhoto().then( (res) => {
        return res.body;
    }).catch( () => {
        throw Error("")
    });
    
    let fname = createUser().then( (res) => {
        return res.firstName;
    }).catch( () => {
        throw Error("")
    });;
    return [photo, fname];
 }