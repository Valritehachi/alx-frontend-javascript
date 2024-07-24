/* user simple promise */
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName: `${firstName}`,
    lastName: `${lastName}`,
  });
}
