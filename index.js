/*program - 1*/

let n;
for(n=1;n<=100;n++)
{
    if(n%3==0 && n%5==0)
        console.log("FIZZ");
    else if(n%3==0)
        console.log("BUZZ");
    else if(n%5==0)
        console.log("FIZZBUZZ");
    else
        console.log(n);
}


/*program-2*/

function palindrome(n)
{
    let m=n.split("").reverse().join("");
    if(n==m)
        console.log("palindrome");
    else
        console.log("not palindrome");
}
let n="malayalam";
palindrome(n);


/*program 3*/

function find_largest_number(n)
{
    let m=0;
    for(let i=0;i<n.length;i++)
        {
            if(n[i]>m)
                m=n[i];
            }
            console.log(m);
            }
            let n="1234";
            find_largest_number(n);


/*program 4*/

function characterCount(str) {
    const countDict = {};
    for (let char of str) {
        if (count[char]) {
            countDict[char] += 1;
        } else {
            countDict[char] = 1;
        }
    }
    return countDict;
}


/*program 5*/

let str="Hi Hello";
function longest(str)
{
    let arr=str.split(" ");
    let max=arr[0];
    for(let i=0;i<arr.length;i++)
        {
            if(arr[i].length>max.length)
                max=arr[i];
        }
        console.log(max);
        }
        longest(str);

/*program 6*/

function factorial(n)
{
    let fact=1;
    for(let i=1;i<=n;i++)
        fact=fact*i;
    return fact;
    }
    let n=5;
    console.log(factorial(n));

/*program 7*/

let x=20;
function celsuis_to_fahrenheit(x)
{
    let fahrenheit=(x*9/5)+32;
    return fahrenheit;
    }
    console.log(celsuis_to_fahrenheit(x));



/*program 8*/

function missing(n)
{
    let arr=[1,2,3,4,6,7,8,9]
    for(let i=0;i<arr.length;i++)
        {
            if(arr[i]!=n)
                return n;
            }
            }
            console.log(missing(5));



