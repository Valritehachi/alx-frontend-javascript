// a function to get student by location
export default function getStudentsByLocation(students, city) {
  return students.filter((obj) => obj.location === city);
}
