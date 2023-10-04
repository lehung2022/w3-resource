// Solution 1
var regExp = /^p(.*?)p$/;

function remove(str) {
    return regExp.test(str) ? str.slice(1, -1) : str
}

console.log(remove('pparallelepipedp')); // Returns: parallelepiped
console.log(remove('oparallelepipedp')); // Returns: oparallelepipedp
console.log(remove('pparallelepipedo')); // Returns: pparallelepipedo

// Solution 2
function front_back(str) {
    first = str.substring(0, 1);
    return first + str + first;
}
console.log(front_back('a'));
console.log(front_back('ab'));
console.log(front_back('abc'));