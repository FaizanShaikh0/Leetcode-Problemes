let fibonacci = function (n) {
    const arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    console.log(arr)
    return arr[n];
};

console.log(fibonacci(7));

// #######################-----------using recursion--------------#######################

let fib = function (n) {
    if (n <= 1) {
        return n;
    }

    return fib(n-1) + fib(n-2)
};

// console.log(fib(7));


// n = 5

// 1 + 0 = 1

// 2 +1 = 3

// 3 + 2 = 5

// 0 , 1 , 1 , 2 , 3 , 5
