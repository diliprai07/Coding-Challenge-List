function isPalindrome(x) {
    if (x < 0)
        return false;
    var reversed = 0;
    var n = x;
    while (n > 0) {
        var digit = n % 10;
        reversed = reversed * 10 + digit;
        n = Math.floor(n / 10);
    }
    return reversed === x;
}
console.log(isPalindrome(122));
//# sourceMappingURL=palindrom-numbers.js.map