// 🏃🏼🏊🏼🏋🏼🏄🏼

/**
 * Filters people array based on total number of letters in their name (including spaces).
 * Filter if name is strictly greater than length
 *
 * @param {string[]} people
 * @param {number} length
 * @returns {string[]} filtered array
 */
function filterByLength(people, length) {
  return people.filter(names => names.length > length);
}

/**
 * Returns an array of every nth person.
 * Note that counting starts at 0,
 * so the returned array will always include (at least) the first person.
 *
 * @param  {string[]} people
 * @param  {number} n
 * @returns {string[]}
 *
 * @example
 *    everyNPerson(['Matt', 'Kim', 'Kanye', 'Obama', 'Hans'], 2)
 *    // → ['Matt', 'Kanye', 'Hans']
 */
function everyNPerson(people, n) {
  if (n === 0) return people; // should return a copy of the array instead of just the array itself
  return people.filter((people, i) => i % n === 0);
}

/**
 * Returns an array where each entry is the person's intials
 * @param {string[]} people
 * @returns {string[]} intials array
 *
 * @example
 *    initials(['Kanye West', 'Barack Obama'])
 *    // → ['KW', 'BO']
 */
function initials(people) {
  return people.map((name, i) => getInitials(people[i]));
}

function getInitials(str) {
  const newArr = str.split(' '); // ['Kanye', 'West']
  return `${newArr[0].charAt(0)}${newArr[1].charAt(0)}`;
}

/**
 * Returns an array where every person is prepended with their position in the array
 * @param {string[]} people
 * @returns {string[]}
 *
 * @example
 *    peopleWithPosition(['Kanye', 'Barack'])
 :*    // → ['0: Kanye', '1: Barack']
 */
function peopleWithPosition(people) {
  return people.map((name, index) => `${index}: ${name}`);
}

/**
 * Sorts `people` by first name
 * @param {string[]} people
 * @returns {string[]} sorted array
 */
function sortByFirstName(people) {
  // Should be none-destructive!!
  const newArr = people.sort();
  return newArr;
  /** one line return people.concat().sort();
   * can also spread it but its a shallow copy
   * does not work with nested objs
   * return [...people].sort()
   */
}

/**
 * Sorts `people` by last name
 * @param {string[]} people
 * @returns {string[]} sorted array
 */
function sortByLastName(people) {
  const sortingArr = [...people];
  return sortingArr.sort((a, b) => {
    const alastName = a.split(' ')[1];
    const blastName = b.split(' ')[1];
    if (alastName > blastName) {
      return 1;
    }
    return -1;
  });

  /** shorten significantly through this
   * return [...people].sort((left, right) => left.split(' ')[1] > right.split(' ')[1] ? 1 : -1);
   */
}

/**
 * Counts all the characters in the people array (including spaces)
 * @param {Array} people Array of names
 * @return Number of characters
 */
function countTotalCharacters(people) {
  return people.reduce((acc, cur) => acc + cur.length, 0);
}

/**
 * Returns `true` if everyone in `people` has `letter` in their name.
 * Returns `false` otherwise
 * @param {string[]} people
 * @param {string} letter
 * @returns {boolean}
 */
function everyoneHasLetter(people, letter) {
  // solution with knowledge of .every/.some and .includes
  return people.every(person => person.includes(letter));
}
/** const checker = people.forEach(names => {
    let check = true;
    if (!names.includes(letter)) {
      check = false;
      return check;
    }
    check = true;
    return check;
  });
  return checker;
  */

/* function letterHelp(letter, ...str) {
  const newArr = str.split('');
  let checker = false;
  newArr.forEach(function(element) {
    if (element === letter) {
      checker = true;
    }
  });
  return checker;
} */

/**
 * Returns `true` if at least one person has `letter` in their name.
 * Returns `false` otherwise
 * @param {string[]} people
 * @param {string} letter
 * @returns {boolean}
 */
function someoneHasLetter(people, letter) {
  // solution with knowledge of .every/.some and .includes
  return people.some(person => person.includes(letter));
}

module.exports = {
  filterByLength,
  everyNPerson,
  initials,
  sortByFirstName,
  sortByLastName,
  countTotalCharacters,
  everyoneHasLetter,
  someoneHasLetter,
  peopleWithPosition,
};
