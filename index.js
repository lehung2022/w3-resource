function swap(arrayA) {
    [arrayA[0], array[arrayA.length - 1]] = [arrayA[arrayA.length - 1], arrayA[0]];
    return arrayA;
}
console.log(swap([1, 2, 3, 4]));
console.log(swap([0, 2, 1]));
console.log(swap([3]));