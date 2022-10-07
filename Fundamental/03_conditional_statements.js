
let num1 = 5
let num2 = 12
let num3 = 80

let result = num1 > num2

if (num1 > num2 && num1 > num3) {
    console.log(num1, " num1 is greater that num2", num2)
} else if(num2 > num1 && num2 > num3) {
    console.log(num2, " num2 is greater that num1 ", num1)
}
else {
    console.log("num3 is greatest");
}