const findTheOldest = function (people) {
  return people.reduce((oldestPerson, currentPerson) => {
    const oldestPersonAge =
      getYearOfDeath(oldestPerson) - oldestPerson.yearOfBirth;
    const currentPersonAge =
      getYearOfDeath(currentPerson) - currentPerson.yearOfBirth;

    if (oldestPersonAge > currentPersonAge) {
      return oldestPerson;
    }

    return currentPerson;
  }, people[0]);
};

function getYearOfDeath(person) {
  let yearOfDeath = new Date().getFullYear();

  if (Object.hasOwn(person, "yearOfDeath")) {
    yearOfDeath = person.yearOfDeath;
  }

  return yearOfDeath;
}
// Do not edit below this line
module.exports = findTheOldest;
