const getListStudentIds = (students) => {
  if (!(students instanceof Array)) {
    return [];
  }
  return students.map((student) => student.id);
};

export default getListStudentIds;
