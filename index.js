function sumTriple(a) {
    if (a != 19) {
        return a * 19;
    }
    else if (a > 19) {
        return a - 19
    }
    else {
        return a + 19;
    }
}
// The above function calculated it wrong

function diff_num(n) {
    if (n <= 19) {
      return (19 - n);
      }
    else
      {
       return (n - 19) * 3;
      }
  }
// This is the correct one   

// write this one the screen
document.write(diff_num(20),);

// Display in the console
console.log(diff_num(10));
console.log(diff_num(20));