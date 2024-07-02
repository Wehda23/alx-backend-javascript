const getStudentIdsSum = (students) => students.reduce((acc, cur) => acc + cur.id, 0);

export default getStudentIdsSum;
