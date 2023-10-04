function check(str)
{
    if (str.length < 4)
    {
        return false;
    }
    front = str.substring(0,4)
    if (front == 'Java')
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(check("JavaScript"));
console.log(check("Java"));
console.log(check("pYTHOMN"));