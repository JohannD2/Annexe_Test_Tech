export default function ageObject(ageObject = {}, action) {
  if (action.type === "saveAge") {
    let ageObjectCopy = { ...ageObject, ...action.ageObject };

    return ageObjectCopy;
  } else {
    return ageObject;
  }
}
