function test_nmuber(x, y) {
    return (x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15);
}

console.log(test_nmuber(15, 9));
console.log(test_nmuber(25, 15));
console.log(test_nmuber(7, 8));
console.log(test_nmuber(25, 10));
console.log(test_nmuber(5, 9));
console.log(test_nmuber(7, 9));
console.log(test_nmuber(9, 25));