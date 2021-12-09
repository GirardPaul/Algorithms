/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {

    return nums.reduce((array, currentVal) => {
        !array.includes(currentVal) ? array.push(currentVal) : null;
        return array;
    }, []);
};

removeDuplicates([1, 1, 2, 2, 3, 4, 5, 1, 1]);