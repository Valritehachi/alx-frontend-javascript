// function to get students id sum
export default function getStudentIdsSum(students) {
  return students.reduce((acc, c) => acc + c.id, 0);
}
