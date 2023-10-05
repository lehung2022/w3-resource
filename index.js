function LetterChanges(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        // handle "z"
        if (122 == str.charCodeAt(i)) {
            result += "a";
        // handle "Z"
        } else if (90 == str.charCodeAt(i)) {
            result += "A";
        // handle all other letter characters
        } else if ((65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 89) ||
                   (97 <= str.charCodeAt(i) && str.charCodeAt(i) <= 121)) {
            result += String.fromCharCode(str.charCodeAt(i) + 1);
        // append all other characters unchanged
        } else {
            result += str.charAt(i);
        }
    }
    return result;
}

console.log(LetterChanges("AaZz+cod!foo")); // output: BbAa+dpe!gpp