// Function to find the largest number in an array

function findLargestNumber(array){
    // Initialize the max variable with the first element of the array
    let max = array[0];

    // Iterate through the array
    for(let i=1; i < array.length; i++){
        // If current element is greater than max, update max
        if (array[i] > max){
            max = array[i];
        }
    }
    // Return the largest number found
    return max;
}

// Example usage
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log(findLargestNumber(arr)); // Output: 9


// Function to reverse an array

function reverseArray(array){
    // Create a new Array to hold the reversed elements
    let reverseArray = [];

    // Iterate through the original array
    for(let i = array.length - 1; i >=0; i--){
        // Add each element to the new array
        reverseArray.push(array[i]);
    }

    // Return reversed array
    return reverseArray;
}

// Example usage
const arr1 = [1, 2, 3, 4, 5];
console.log(reverseArray(arr)); // output: [5, 4, 3, 2, 1]


// Function to check if a string is a palindrome

function isPalindrome(string){
    // Reverse original string
    const reversedString = string.split('').reverse().join('');

    // Compare original with reversed
    return string === reversedString;
}

console.log(isPalindrome("level")); // Output: true
console.log(isPalindrome("hello")); // Output: false


// Function to find most frequent element in an array

function mostFrequentElement(array){
    // Create an object to count occurences of each element
    const frequencyMap = {};

    // Populate frequency map
    for(let num of array){
        if(frequencyMap[num]){
            frequencyMap[num]++;
        }else{
            frequencyMap[num] = 1;
        }
    }

    // Find the element with the highest frequency
    let maxFrequency = 0;
    let mostFrequentElement = array[0];

    for(let num in frequencyMap){
        if(frequencyMap[num] > maxFrequency){
            maxFrequency = frequencyMap[num];
            mostFrequent = parseInt(num);
        }
    }
    return mostFrequent;
}

// Example usage
console.log(mostFrequentElement([1, 3, 2, 1, 4, 1, 2, 2, 3]));