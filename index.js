// Code your solution hereconst drivers = [
  
 
function findMatching(drivers, name) { 
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }

 const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
console.log(findMatching(drivers, 'a')); // ['sammy', 'annette', 'sarah']
console.log(findMatching(drivers, 'B')); // ['bobby']
console.log(findMatching(drivers, 'x')); // []

  
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
    