let n = prompt('enter number: ')

let primenum = function (n) {
    if (n <= 1) {
        console.log('Not a Prime Number');
    } else {
        let isPrime = true;

        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log('It is a Prime Number');
        } else {
            console.log('Not a Prime Number');
        }
    }
}

primenum(n);
