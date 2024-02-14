// return indices of the two numbers such that they add up to the target.

// solving question using brute force solution

let twosum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

// console.log(twosum([2,7,11,15],18)); // output is [1,2]

// second approach using js object

const twoSum = function (nums,target) {
    var obj = {};
    for (let i = 0; i < nums.length; i++) {
        var n = nums[i]

        if (obj[target-n]>=0) {
            return [obj[target-n],i];
        }else {
            obj[n] = i;
        }
    }
}

console.log(twoSum([2,7,11,15],26)); // output [2,3]
