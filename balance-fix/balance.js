function formatBalance(amount) {
    let num = Number(amount)

    if (isNaN(num)){
        num = 0
    }
    return "$" + num.toFixed(2);
}

console.log(formatBalance(100));
console.log(formatBalance("45.5"));
console.log(formatBalance(null));
console.log(formatBalance(undefined));
console.log(formatBalance("abc"));