let today = new Date();
let christmasYear = today.getFullYear();

if (today.getMonth() == 11 && today.getDate() > 25) {
  christmasYear = christmasYear + 1;
}

let christmasDate = new Date(christmasYear, 11, 25);
let dayMilliseconds = 1000 * 60 * 60 * 24;

let remainingDays = Math.ceil(
  (christmasDate.getTime() - today.getTime()) /
  (dayMilliseconds)
);

// Write it to the page
document.write("There are " + remainingDays +
  " days remaining until Christmas.");

console.log(today);
console.log(christmasYear);
console.log(christmasDate);
console.log(dayMilliseconds);
console.log(remainingDays);