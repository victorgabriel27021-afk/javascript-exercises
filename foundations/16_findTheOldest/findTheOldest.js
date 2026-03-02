const findTheOldest = function(people) {
  const currentYearn= new Date ().getFullYear();
  return people.reduce((oldest, person) => {
  	const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
  	const personAge = (person.yearOfDeath || currentYear) - oldest.yearOfBirth;
  	return personAge > oldestAge ? person : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
