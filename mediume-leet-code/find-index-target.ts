// Input nums must be sorted array
// input: [1,2,4,6,9] target 10 output: 5
// Input : [1,4,6,8: target 2 outut: ]: 2;

// Here seems some issue but logic is same
function findIndexOfTarget(numList: number[], target: number): number {
  // Apply binary search for this.

  // declare a variable for the to store the lenght of the array
  const size = numList.length;

  // Iterate over for loop
  // Use two control
  // Define start index as 0 and end index as the length of the array.
  let returnIndex = 0;
  for (let i = 0, j = size - 1; i <= j; ) {
    let midIndex = Math.floor((i + j) / 2);

    // If target is greater than middle index value assign value of i as middle index;
    if (numList[midIndex] > target) {
      i = midIndex;
    } else if (numList[midIndex] < target) {
      j = midIndex;
    } else if (i == j) {
      if (numList[midIndex] > target) {
        returnIndex = i + 1;
        break;
      } else {
        returnIndex = i;
        break;
      }
    } else {
      returnIndex = i;
    }
  }
  return returnIndex;
}
