/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    return nums.reduce((array, current) => {
        if(current !== val){
            array.push(current);
        }
        return array;
    }, []);
};
removeElement([0,1,2,2,3,0,4,2], 2)