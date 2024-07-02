const getStudentIdsSum = (students) => {
  if (!(students instanceof Array)) {
    return [];
  }
  return students.reduce((acc, value) => acc + value.id, 0);
};

export default getStudentIdsSum;
