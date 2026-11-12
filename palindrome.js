// Find if a number is palindrome

var num = 10;

var rev = 0;

for(let i = num ; i > 0 ; i=Math.floor(i/10) )
{
    rev = rev * 10 + (i % 10);
    //console.log(rev);
}

//console.log(rev);


if(num == rev && num > 0)
{
    console.log("Number is a panlindrome");
}
else
{
    console.log("Number is not a palindrome ");
}

