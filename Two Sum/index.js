var twoSum = function(nums, target) {

  for(let i = 0; i < nums.length; i++){
    for(let j = 0; j < nums.length; j++){
      if(nums[i] + nums[j] === target && i !== j){
        return [i, j];
        break;
      }
    }
  }
};

twoSum([2,5,5,11], 10)
