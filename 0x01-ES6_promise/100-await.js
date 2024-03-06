import { uploadPhoto } from "./utils";
import { createUser } from "./utils";
export default async function asyncUploadUser() {
    try {
        const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
        return { photo, user };
    } catch (error) {
        console.error(error);
        return { photo: null, user: null };
    }
}