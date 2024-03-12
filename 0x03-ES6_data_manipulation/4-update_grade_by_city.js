export default function updateStudentGradeByCity(students, city, newGrades) {
  if (Array.isArray(students) && (Array.isArray(newGrades))) {
    const results = students
      .filter((student) => student.location === city)
      .map((student) => {
        const newGradeObj = newGrades.find((grade) => grade.studentId === student.id);
        const grade = newGradeObj ? newGradeObj.grade : 'N/A';
        return { ...student, grade };
      });
    return results;
  }
  return [];
}
