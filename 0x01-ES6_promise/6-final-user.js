import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  try {
    const [userResult, photoResult] = await Promise.allSettled([userPromise, photoPromise]);

    const userStatus = {
      status: userResult.status,
      value: userResult.status === 'fulfilled' ? userResult.value : userResult.reason,
    };

    const photoStatus = {
      status: photoResult.status,
      value: photoResult.status === 'fulfilled' ? photoResult.value : photoResult.reason,
    };

    return [userStatus, photoStatus];
  } catch (error) {
    console.log(error);
    return [];
  }
}
