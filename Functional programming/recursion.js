function isVowel(char) {
  return ["a", "e", "i", "o", "u"].includes(char);
}

// Iterative approach
function countVowels(str) {
  let count = 0;

  for (let char of str) {
    if (isVowel(char)) {
      count++;
    }
  }

  return count;
}

const result = countVowels("The quick brown fox jumps over the lazy dog");
console.log(result);

// Recursive approach
function countVowels2(str, start = 0, count = 0) {
  if (start === str.length - 1) {
    return count;
  }

  if (isVowel(str[start])) {
    count++;
  }

  return countVowels(str, start++, count);
}

const result2 = countVowels2("The quick brown fox jumps over the lazy dog");
console.log(result2);

// Recursive approach 2
function countVowels3(str) {
  if (str.length === 0) return 0;

  const first = isVowel(str[0]) ? 1 : 0;

  return first + countVowels3(str.slice(1));
}

const result3 = countVowels3("The quick brown fox jumps over the lazy dog");
console.log(result3);
