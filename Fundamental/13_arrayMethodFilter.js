let nums = [23, 45, 64, 64, 24, 12, 34];
//nums.forEach(n => {
 //   console.log(n);
//})

//nums.forEach((n, i, nums) => {
  //  console.log(n, i);
//})


// Filter and map
nums.filter(n => n % 2 === 0) //equality without type coersion
    .map(n => n*4)
    .forEach(n => {
        console.log(n);
    })
