function difference(n) {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
}

// write this one the screen
document.write(difference(20), "\n");
document.write(difference(32), "\n");
document.write(difference(11), "\n");
// Display in the console
console.log(difference(20));
console.log(difference(32));
console.log(difference(11)); 
