function check(x)
{
    if (x % 3 == 0 || x % 7 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(check(12));
console.log(check(15));
console.log(check(20));
console.log(check(21));