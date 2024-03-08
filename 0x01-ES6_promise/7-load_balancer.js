export default async function loadBalancer(chinaDownload, USDownload) {
  const firstDone = Promise.race([chinaDownload, USDownload]);
  const [output] = await Promise.allSettled([firstDone]);
  return output.value;
}
