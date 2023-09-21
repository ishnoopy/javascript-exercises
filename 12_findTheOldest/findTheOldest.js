const findTheOldest = function(peopleArray) {
  for (const person of peopleArray) {
    if (!person.yearOfDeath) {
      person["yearOfDeath"] = new Date().getFullYear();
    }
    person["age"] = person.yearOfDeath - person.yearOfBirth;
  }

  const oldestPerson = peopleArray.reduce((maxPerson, person) => {
    if (person.age > maxPerson.age) {
      return person;
    }

    return maxPerson;

  }, peopleArray[0])

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
