function isPalindrome(x: number): boolean {
  // If number is less than zero then it always be the negative number.
  if (x < 0) return false;

  let reversed = 0;
  let n = x;

  // User loop till n is less than the zero
  // Find the remainder 
  // Add the remainder to the reserversed assumed number multiplying with ten;
  // find n by deviding the number by 10

  // Return the resule if reversed is equal or not.
  while (n > 0) {
    const digit = n % 10;
    reversed = reversed * 10 + digit;

    n = Math.floor(n / 10);
  }
  return reversed === x;
}

console.log(isPalindrome(122));
