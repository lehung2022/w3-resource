// solution 1
// let year = 2014;
// while(year <= 2050) {
//   if(new Date(year, 0, 1).getDay() === 0) {
//     break;
//   }
//   year++;
// }

// console.log(year);

// solution 2
let s = `Enter the value of Year1
and Year2 in the input box to get
year's having Sunday on 1st January`;

document.getElementById("geeks")
.innerHTML = `<p>${s}</p>`;

function GFG_Fun() {
var y1 = Number(document
.getElementById('year1').value);

var y2 = Number(document
.getElementById('year2').value);

var res = " ";

for (let year = y1; year <= y2; ++year) {
	const c_year=new Date(year, 0, 1);
	if (c_year.getDay()===0) {
	res +=year + " ," ;
	}
}
	if (y1> y2) {
	document.getElementById('gfg').innerHTML
	= "Year2 must be greater than Year1";
	} else {
	if (res === " ") {
	document.getElementById('gfg')
	.innerHTML = `<p>No Year Exist</p>`;
	} else {
	document.getElementById('gfg')
	.innerHTML = `<p> Year having
		Sunday on 1st January are :${res}</p>`;
	}
	}
	}
