function sum(x,y)
{
    const sum = x+y;
    if (sum >=50 && sum <= 80){
        return 65;
    }
    return 80;
}
console.log(sum(30,25));
console.log(sum(90,75));