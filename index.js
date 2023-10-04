function comparison(a, b) {
    if ((a + b) === 50) {
        return 50;
    }
    else if ((a + b ) != 50) {
        return a - 19
    }
    else if (a === 50 || b === 50) {
        return 50;
    } else {
        return "We have a problem here"
    }
}
// The above code is my solution

function test50(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test50(50, 50))
console.log(test50(20, 50))
console.log(test50(20, 20))
console.log(test50(20, 30))
// This one is from w3Resource

// write this one the screen
document.write(comparison(20),);

// Display in the console
console.log(comparison(10, 20));
console.log(comparison(20, 30));