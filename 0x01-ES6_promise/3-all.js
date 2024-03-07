import { createUser, uploadPhoto } from "./utils";

export default function handleProfileSignup() {
    Promise.all([uploadPhoto(), createUser()])
        .then(([photoResult, userResult]) => {
            console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
        })
        .catch(error => {
            console.log("Signup system offline");
        });
 }
 