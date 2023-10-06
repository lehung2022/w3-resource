// function for left rotation
function left_rotation(str,k){

    // getting prefix elements and remaining elements
    // switiching there place
    var new_str = str.substr(k) + str.substring(0,k);
 
    // printing the rotated string
    console.log("String after kth left rotation is: " + new_str);
 }
 
 // function for right rotation
 function right_rotation(str,k){
 
    // getting suffix elements and remaining elements
    // switiching there place
 
    var new_str = str.substr(str.length - k) + str.substring(0,str.length-k);
    // printing the rotated string
 
    console.log("String after kth rigth rotation is: " + new_str);
 }
 
 // given string
 var str = "apple"
 var k = 2
 
 // printing the given string
 console.log("The given string is: " + str);
 
 // getting left rotation
 
 left_rotation(str,k);
 
 // getting right rotation
 right_rotation(str,k)