import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default async function handleProfileSignup(firstName, lastName, fileName) {
    try {
        const signupPromise = signUpUser(firstName,lastName);
        const uploadPromise = uploadPhoto(fileName);

        const [signupResult, uploadResult] = await Promise.allSettled([signupPromise,uploadPromise]);

        return [
            {status : signupResult.status,value : signupResult.value }
        ]
    } catch (error) {
        return error;
    }
}
