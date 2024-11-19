const array = [1, 2, 3, 4, 5];

const maxValue = array.reduce((max, current) => (current > max ? current : max), array[0]);

console.log(maxValue); // Output: 5