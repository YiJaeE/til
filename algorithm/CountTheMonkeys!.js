// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

function monkeyCount(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  } return arr;
}

console.log(monkeyCount(10));
console.log(monkeyCount(5));
