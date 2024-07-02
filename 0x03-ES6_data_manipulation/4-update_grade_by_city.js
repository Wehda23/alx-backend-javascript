import getStudentsByLocation from './2-get_students_by_loc';

const updateStudentGradeByCity = (students, location, data) => {
  if (!(students instanceof Array)) {
    return [];
  }
  // Filter students
  const filterStudents = getStudentsByLocation(students, location);
  // Update the objects
  const updatedStudents = filterStudents.map((student) => {
    const gradeData = data.find((newData) => newData.studentId === student.id);
    return {
      ...student,
      grade: gradeData ? gradeData.grade : 'N/A',
    };
  });
  return updatedStudents;
};

export default updateStudentGradeByCity;
