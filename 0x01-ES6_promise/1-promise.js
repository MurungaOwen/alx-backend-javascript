export default function getFullResponseFromAPI(success) {
  const prom = new Promise((res, rej) => {
    if (success) {
      const oject = {
        status: 200,
        body: 'Success',
      };
      res(oject);
    } else {
      rej(new Error('The fake API is not working currently'));
    }
  });
  return prom;
}
