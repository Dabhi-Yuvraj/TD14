const arr = [18, 75, 9, -71, 21, -34, 96];
// for Finding Maximum number using normal function
function findMaximum(arr){
    var max = arr[0];
    for(let i = 1; i < arr.length; i++)
    {
        if(max < arr[i])
            max = arr[i];
    }
    return max;
}
console.log("Maximum Number : ",findMaximum(arr));


// calculate the sum of all element using anonymous function or also used arrow function
const sumElement = (arr) =>{
    var sum = 0;
    for(let i = 0; i<arr.length; i++)
    {
        sum += arr[i];
    }
    return sum;
}

console.log("sum of all Element : ",sumElement(arr));


// count the odd number in the array using call back function
let oddCount = 0;

function checkOdd(num) {
    if (num % 2 != 0) {
        oddCount++;
    }
}

arr.forEach(checkOdd);

console.log("Count odd numbers :", oddCount);

// const countOddNumber = (arr) => {
//     var count = 0;
//     for(let i = 0; i<arr.length; i++)
//     {
//         if(arr[i]%2 != 0)
//             count++;
//     }
//     return count;
// }
// const odd = countOddNumber(arr);
// console.log("Count of odd numbers : ",odd);