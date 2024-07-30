// Export the function as the default export of the module
export default function getListStudents() {
  // Return an array of student objects, each with an id, firstName, and location
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },  // Student 1
    { id: 2, firstName: 'James', location: 'Columbia' },            // Student 2
    { id: 5, firstName: 'Serena', location: 'San Francisco' },      // Student 3
  ];
}
