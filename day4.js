// Good morning!Here 's your coding interview problem for today.

// This problem was asked by Stripe.

// Given an array of integers, find the first missing positive integer in linear time and constant space.In other words, find the lowest positive integer that does not exist in the array.The array can contain duplicates and negative numbers as well.

// For example, the input[3, 4, -1, 1] should give 2. The input[1, 2, 0] should give 3.

// You can modify the input array in -place.

const array = [3, 4, -1, 1, 5, 6, 7, 8, 2, 10,-2,-5 ]

let sortedArray = array.sort(function (a, b) {
    return a-b;
})
console.log(sortedArray)

for(var i = 0 ; i<array.length; i++){
    var j=i+1
    while(array[i]<=0){
        console.log(array[i], "before iteration of less than zero")
        i++;
        j++;
        console.log(array[i], "after iteration")
    }
    console.log(array[i], array[j])
    if(array[i]+1 !== array[j]){
        console.log(array[i]+1, "inside second for loop")
        return array[i]+1
    }
}
