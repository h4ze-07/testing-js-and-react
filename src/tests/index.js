export function compareMinMaxValue(a, b) {
    return a > b ? a : b;
}

export function makeStringCapitalized(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}


export function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz'
    if (n % 5 === 0) return 'Buzz'
    return ""+n;
}