export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  const updatedMap = new Map();
  for (const [key, value] of map) {
    if (value === 1) {
      updatedMap.set(key, 100);
    }
    updatedMap.set(key, value);
  }
  return updatedMap;
}
