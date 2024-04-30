//  Integer to Roman
// Medium
// Topics
// Companies
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.
// Example 1:
// Input: num = 3
// Output: "III"
// Explanation: 3 is represented as 3 ones.
// Example 2:
// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 3:
// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
// Constraints:
// 1 <= num <= 3999
function intToRoman(num) {
    var newMap = new Map();
    newMap.set(1, "I");
    newMap.set(4, "IV");
    newMap.set(5, "V");
    newMap.set(9, "IX");
    newMap.set(10, "X");
    newMap.set(40, "XL");
    newMap.set(50, "L");
    newMap.set(90, "XC");
    newMap.set(100, "C");
    newMap.set(400, "CD");
    newMap.set(500, "D");
    newMap.set(900, "CM");
    newMap.set(1000, "M");
    var romNumber = '';
    while (num > 0) {
        for (var _i = 0, newMap_1 = newMap; _i < newMap_1.length; _i++) {
            var _a = newMap_1[_i], key = _a[0], value = _a[1];
            if (num >= key) {
                romNumber = romNumber + value;
                num = num - key;
                break;
            }
        }
    }
    return romNumber;
}
console.log(intToRoman(9));
