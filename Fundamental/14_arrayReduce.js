let nums = [1, 2, 2, 4, 5, 6, 7];

let result = nums.filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((a,b) => a +b)
    

console.log(result)