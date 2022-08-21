export default function person(person = {}, action) {
  if (action.type === "savePerson") {
    let personCopy = { ...person, ...action.person };

    return personCopy;
  } else {
    return person;
  }
}
