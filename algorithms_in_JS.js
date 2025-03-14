// 1.Function to find the largest number in an array
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


// 2. Function to reverse an array
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


// 3. Function to check if a string is a palindrome
function isPalindrome(string){
    // Reverse original string
    const reversedString = string.split('').reverse().join('');

    // Compare original with reversed
    return string === reversedString;
}



// 4. Function to find most frequent element in an array
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


// 5a. Function to merge two sorted arrays into a single sorted array
function mergeSortedArrays(arr1, arr2){
    // Initialize an empty array to hold the merged result
    const mergedArray = [];

    // Initialize two pointers, one for each array
    let i = 0;
    let j = 0;

    // Iterate through both arrays
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            // If the element from arr1 is smaller, add it to the merged array and move pointer
            mergedArray.push(arr1[i]);
            i++;
        }else{
            // If the element from arr2 is smaller, add it to the merged array and move the pointer in arr2
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1, add them to the merged array
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, add them to merged array
    while(j < arr2.length){
        mergedArray.push(arr2[j]);
        j++;
    }
    // Return the merged sorted array
    return mergedArray;
}


// 5b. Function to merge two sorted arrays into a single sorted array
function mergeSortedArraysb(arr1, arr2){
    // Concatenate two arrays
    const combinedArray = arr1.concat(arr2);

    // Sort combined array
    combinedArray.sort((a, b) => a - b);

    // Return sorted, merged array
    return combinedArray;
}


// 6. Function to compare neighbors in an array
function compareNeighbors(arr){
    let result = "";

    for(let i=0; i< arr.length - 1; i++){
		if(arr[i] < arr[i+1]){
			result += "<";
		}else if(arr[i] > arr[i+1]){
			result += ">";
		}else{
			result += "=";
		}
 	}
    return result;
}


// 7. Function to classifyNumbers depending it's value
function classifyNumbers(arr){
    let result = "";
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            result += "<";
        }else if(arr[i] === 0){
            result += "=";
        }else{
            result += ">"
        }
    }
    return result;
}


// 8. Function to get day after k days
function getDayAfterKDays(startDay, k){
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let index = days.indexOf(startDay);

    for(let i = 0; i < k; i++){
        index = (index + 1) % 7;
    }

    return days[index];
}


// 9. Function to to find the Kth largest element
function kthLargestElement(array, k){
    const sortedArray = array.slice().sort((a,b) => (b-a));
    return sortedArray[k-1];
}


//10. Find The First Non-Repeating character
function firstNonReapeatingChar(str) {
    for (let char of str){
        if(str.indexOf(char) === str.lastIndexOf(char)) return char;
    }
        return null;
    }


//11. Function for username validation

/* 
1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.
If the username is valid then your program should return the string true,
otherwise return the string false.
*/
function usernameValidation(str){
    const valid_str = /^[A-Za-z]\w+[A-Za-z0-9]$/;
    const valid_length = (str) => str.length >=4 && str.length <=25;
    const valid_username = (valid_str.test(str) && valid_length(str));
    return valid_username;
    }


//12. Find strings with letter in the same index
function sameIndex(array){
    for(let i = 0; i< array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            for(let k = 0; k < Math.min(array[i].length, array[j].length); k++){
                if (array[i][k] === array[j][k]) {
                return[k, i, j, array[i][k]];
            }
        }
    }     
}
return [];
}


//13. Check if a given number is a prime number
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    } 
    return true; 
}


//14. Function to find strings' intersection
function findIntersection(strArray){
    let firstArray = strArray[0].split(", ");
    let secondArray = strArray[1].split(", ");
    const result = [];

    for(let i=0;i<firstArray.length;i++){
        for(let j=0;j<secondArray.length;j++){
            if(firstArray[i] === secondArray[j]){
                result.push(firstArray[i]);
                break;
            }
        }
    }
    return result.join(",");
}


//15. Calculate the area between Towers
function calculateAreaBetweenTowers(heights){
    let left = 0, right = heights.length - 1;
    let leftMax = 0, rightMax = 0;
    let area = 0;

    while (left < right){
        if (heights[left] < heights[right]){
            if (heights[left] >= leftMax){
                leftMax = heights[left];
             }else{
                area += leftMax - heights[left];
        }
            left++;
        }else{
            if (heights[right] >= rightMax){
                rightMax = heights[right];
            }else{
                area += rightMax - heights[right];
            }
            right--;
        }
    }
    return area;
}


//Export all functions
module.exports = {
    findLargestNumber,
    reverseArray,
    isPalindrome,
    mostFrequentElement,
    mergeSortedArrays,
    mergeSortedArraysb,
    compareNeighbors,
    classifyNumbers,
    getDayAfterKDays,
    kthLargestElement,
    firstNonReapeatingChar,
    usernameValidation,
    sameIndex,
    isPrime,
    findIntersection,
    calculateAreaBetweenTowers
};