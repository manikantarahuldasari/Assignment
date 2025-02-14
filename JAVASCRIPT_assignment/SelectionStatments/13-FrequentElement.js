function mostFrequentElement(arr) {
    let frequencyMap = {}; // Object to store element counts
    let maxCount = 0; 
    let mostFrequent = null; 

    for (let num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1; // Count occurrences

        if (frequencyMap[num] > maxCount) { // Update most frequent element
            maxCount = frequencyMap[num];
            mostFrequent = num;
        }
    }
    return mostFrequent;
}

// Example usage:
console.log(mostFrequentElement([2, 3, 2, 5, 3, 2, 4])); 
