//Print odd number using Arrow Finction
arr=[1,2,3,4,5];
fun=()=>{
    for (let i = 0; i<arr.length; i++){
    if(arr[i]%2!==0)
    {
      console.log(arr[i]);
    }
    }
};
fun();

//Convert all the strings to title caps in a string array using arrow function:

let str=(str1)=>
{   let arr=[];
   str1=str1.toLowerCase().split(" ");
   
   for(i=0;i<str1.length;i++)
   {
      arr.push(str1[i].charAt(0).toUpperCase() + str1[i].slice(1));
   }
    return console.log(...arr);
};
(str("i Love my Country"));


//Sum of all numbers in an array using arrow function:

array=[20,30,4959,56];
sumOfArray=array.reduce((sum,curr)=>sum+curr,0);
console.log(sumOfArray);


//Return all the prime numbers in an array using arrow function:

array1=[2,30,5,56];
let check_prime=()=>
{
 for(i=0;i<array1.length;i++)
    {
        let count=0;
        n=array1[i];
        for(j=1;j<=n;j++)
        {
           if(n%j===0)
           {
               count++;
           }
        }
        if(count==2)
        {
            console.log(array1[i]);
        }
        
       
    }
    
};
check_prime();


//Return all the palindromes in an array using arrow function:

palindrome=(arr)=>{
    if(arr===arr.split("").reverse().join(""))
    {
        return arr +  " " + "is palindrome";
    }
    
    else
    {
        return arr + " "+ "not palindrome";
    }
};
let array=["malayalam","hindi","english","telgu","abcdcba"];
result=array.map(palindrome);
console.log(result);



