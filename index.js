function check(x,y)
{
    if (x == 8 || y == 8)
    {
        return true;
    }
    if (x+y == 8 || x-y == 8)
    {
        return true;
    }
    return false;
}
console.log(check(7,8));
console.log(check(8,8));
console.log(check(24,32));
console.log(check(17,18));
console.log(check(20,28));