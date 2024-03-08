export default function uploadPhoto(filename) {
  const photoReject = new Promise((resolve, reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
  return photoReject;
}
