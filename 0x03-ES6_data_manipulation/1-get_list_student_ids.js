export default function getListStudentIds(arrayTaking) {
  if (Array.isArray(arrayTaking)) {
    const ids = arrayTaking.map((value) => value.id);
    return ids;
  }
  return [];
}
