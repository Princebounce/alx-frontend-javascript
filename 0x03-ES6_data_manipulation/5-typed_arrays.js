export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter((student) => student.location === city);

  return filteredStudents.map((student) => {
    const newGrade = newGrades.find((grade) => grade.id === student.id);
    if (newGrade) {
      return {
        ...student,
        grade: newGrade.grade,
      };
    }
    return student;
  });
}
