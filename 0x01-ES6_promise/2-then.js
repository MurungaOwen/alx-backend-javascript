export default function handleResponseFromAPI(promise) {
    const logs = 'Got a response from the API';
    console.log(logs);
    promise.then(() => {
        const object = {
            status: 200,
            body: 'Success',
        };
        return object;
    })
    .catch(() => {
        console.log(Error(''));
    })
}
