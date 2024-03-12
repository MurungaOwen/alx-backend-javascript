// queryAPI.js

export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;
  count += 1;

  if (count >= 5) {
    throw new Error(`Endpoint load is high: ${JSON.stringify(endpoint)}`);
  }

  weakMap.set(endpoint, count);

  // Perform API query here
  console.log(`Querying API for ${JSON.stringify(endpoint)} (${count} times)`);
}
