export default function getStudentsByLocation(studList, city) {
  if (Array.isArray(studList)) {
    const related = [];
    studList.filter((value) => {
      if (value.location === city) {
        related.push(value);
      }
      return [];
    });
    return related;
  }
  return [];
}
