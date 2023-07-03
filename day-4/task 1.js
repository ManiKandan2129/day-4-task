//print odd numbers in an array using anonymous function:

var arr = [1,2,3,4,5,6,7,8,9,10];
arr.forEach(function(arr){
    if (arr%2!==0){
        console.log(arr);
    }
})

//print odd numbers in an array using IIFE function:

var arr = [1,2,3,4,5,6,7,8,9,10];
(function () {
    for (var i=0; i<arr.length; i++) {
        if (arr[i]%2!==0){
            console.log(arr[i]);
        }
    }
    
})();

//Convert all the strings to title caps in a string array using anonymous function:

let str=function(str1)
{   let arr=[];
   str1=str1.toLowerCase().split(" ");
   
   for(i=0;i<str1.length;i++)
   {
      arr.push(str1[i].charAt(0).toUpperCase() + str1[i].slice(1));
   }
    return console.log(...arr);
};
(str("virat kohli is one of the best player in the world"));


//Convert all the strings to title caps in a string array using IIFE function:

(function(str1)
{
    let arr=[];
   str1=str1.toLowerCase().split(" ");
   
   for(i=0;i<str1.length;i++)
   {
      arr.push(str1[i].charAt(0).toUpperCase() + str1[i].slice(1));
   }
    return console.log(...arr);
})("virat kohli is one of the best player in the world");

//Sum of all numbers in an array using anonymous function:

let arr1 = [1,2,3,4,5,6,7,8,9,10];
let sum=0;
let arr=function()
{   
   for(i=0;i<arr1.length;i++)
   {
       currentValue=arr1[i];
       sum=sum+currentValue;
       
       
   }
   
   console.log(sum);
};
arr();

//Sum of all numbers in an array using IIFE function:

let arr2 = [1,2,3,4,5,6,7,8,9,10];
let sum2=0;
(function()
{
    for(i=0;i<arr2.length;i++)
    {
        currentValue=arr2[i];
        sum2=sum2+currentValue;
    }
    console.log(sum2);
})();

//return all prime numbers in an array using anonymous function:

array=[2,30,4959,56,4,8,7,3];
let check_prime = function ()
{
 for(i=0;i<array.length;i++)
    {
        let count=0;
        n=array[i];
        for(j=1;j<=n;j++)
        {
           if(n%j===0)
           {
               count++;
           }
        }
        if(count==2)
        {
            console.log("Prime",array[i]);
        }
        
        //else{
            
          //console.log("Not Prime",array[i]);
        //}
    }
    
};
check_prime();


//return all prime numbers in an array using IIFE function:

array=[2,30,4959,56,4,8,7,3];
 (function ()
{
 for(i=0;i<array.length;i++)
    {
        let count=0;
        n=array[i];
        for(j=1;j<=n;j++)
        {
           if(n%j===0)
           {
               count++;
           }
        }
        if(count==2)
        {
            console.log("Prime",array[i]);
        }
        
        //else{
            
          //console.log("Not Prime",array[i]);
        //}
    }
    
})();

//Return all the palindromes in an array using anonymous function:

palindrome=function (arr) {
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

//Return all the palindromes in an array using IIFE function:

let array1=["malayalam","hindi","english","telgu","abcdcba"];
palindrome1=(function(arr1)
{
    if(arr1===arr1.split("").reverse().join(""))
    {
         return arr1 +  " " + "is palindrome";
    }
    
    else
    {
         return arr1 +  " " + "is not a palindrome";
    }
   
    
});console.log(array1.map(palindrome1));


//Return median of two sorted arrays of the same size using anonymous function:

merge= function (c,d) {
    
    let  e=c.concat(d);
    let middle=parseInt(e.length/2);
    let beforemiddle=middle-1;
    return (e[middle]+e[beforemiddle])/2;
  };
  let a=[1,2,3,4,5,6];
  let b=[7,8,9,10,11];
  console.log("The median of two array is",merge(a,b));

  //Return median of two sorted arrays of the same size using IIFE function:

  (function(){
    let arr1=[1,2,3,4,5];
    let arr2=[6,7,8,9,10];
    let arr3=arr1.concat(arr2);
    let middle1=parseInt(arr3.length/2);
    let beforemiddle1=middle1-1;
    let median=(arr3[middle1]+arr3[beforemiddle1])/2;
    console.log("The median of two Array is",median);
 })();


 //Remove duplicates from an array using anonymous function:

 var Duplicate= function() {
    let arr1=[];
    let arr2=[];
    let dummy=[1,1,2,3,4,5];
    let obj={};
    for(let index in dummy)
    {
        currentValue=dummy[index];
        if(obj[currentValue])
        {
            obj[currentValue]+=1;
        }
        
        else
        {
            obj[currentValue]=1;
        }
        
    }
    
    for(let key in  obj)
    {
       repeatCount=obj[key];
      if(repeatCount==1)
      {
          arr1.push(key);
      }
      
      else
      {
          arr2.push(key);
      }
    }
    
    console.log(arr1);
    
  };
  Duplicate();

  //Remove duplicates from an array using IIFE function:

  (function()
  {
     let arr1=[];
    let arr2=[];
    let dummy=[1,1,2,3,4,5];
    let obj={};
    for(let index in dummy)
    {
        currentValue=dummy[index];
        if(obj[currentValue])
        {
            obj[currentValue]+=1;
        }
        
        else
        {
            obj[currentValue]=1;
        }
        
    }
    
    for(let key in  obj)
    {
       repeatCount=obj[key];
      if(repeatCount==1)
      {
          arr1.push(key);
      }
      
      else
      {
          arr2.push(key);
      }
    }
    
    console.log(arr1); 
      
  })();

  //Rotate an array by k times using anonymous function:

  var rotateArray = function(arr, k) {
    var rotations = k % arr.length;
    
    return arr.slice(rotations).concat(arr.slice(0, rotations));
  };
  var array3 = [1, 2, 3, 4, 5];
  var k = 1;
  
  var rotatedArray = rotateArray(array3, k);
  console.log(rotatedArray);  
  

   //Rotate an array by k times using IIFE function:

   var array2 = [1, 2, 3, 4, 5];
var k = 2;

var rotatedArray = (function(arr, rotations) {
  var rotated = rotations % arr.length;
  
  return arr.slice(rotated).concat(arr.slice(0, rotated));
})(array2, k);

console.log(rotatedArray);  

















