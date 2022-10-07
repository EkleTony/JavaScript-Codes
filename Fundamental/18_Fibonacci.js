// 0, 1, 1, 2, 3, 5, 8,...

function fibonacciGenerator(n) {
    var num = [];
    if (n == 1) {
        num = [0]
    } else {
        num = [0, 1];
        for (var i = 1; i < n; i++){
            num.push(num[i - 1] + num[i]);

        }
        console.log(num);
    }
   
    
}

fibonacciGenerator(10);