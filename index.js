const algorithms = require("./algorithms_in_JS.js");

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];

console.log("1. Largest Number:", algorithms.findLargestNumber(arr));
console.log("2. Reversed Array:", algorithms.reverseArray(arr));
console.log("3. Is 'level' a palindrome?", algorithms.isPalindrome("level"));
console.log("4. Most Frequent Element:", algorithms.mostFrequentElement(arr));
console.log("5a. Merged Sorted Arrays:", algorithms.mergeSortedArrays([1, 3, 5], [2, 4, 6]));
console.log("5b. Merged Sorted Arrays:", algorithms.mergeSortedArraysb([1, 3, 5], [2, 4, 6]));
console.log("6. Neighbor Comparison:", algorithms.compareNeighbors([4, 3, 6, 6, 3]));
console.log("7. Classified Numbers:", algorithms.classifyNumbers([-1, 0, 2, -3, 5, 0]));
console.log("8. Day after 2 days from 'Wed':", algorithms.getDayAfterKDays("Wed", 2));
console.log("9. Kth Largest Element:", algorithms.kthLargestElement([10, 5, 3, 7, 8], 2));
console.log("10. First Non-Repeating Character:", algorithms.firstNonReapeatingChar("aabbcde"));
console.log("11. Username is valid:", algorithms.usernameValidation("Ab23_f"));
console.log("12. Same Index Letter Positions:", algorithms.sameIndex(["abc", "bca", "dbe"]));
console.log("13. Is 11 Prime?", algorithms.isPrime(11));
console.log("14. Intersection between strings:", algorithms.findIntersection(["1, 3, 4", "1, 2, 4"]));
console.log("15. Area between towers:", algorithms.calculateAreaBetweenTowers([0,1,0,2,1,0,1,3,2,1,2,1]));
