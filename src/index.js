const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];

module.exports = function toReadable(number) {
    let res = [];
    if (number > 99) res.push(numbers[Math.floor(number / 100)] + " hundred");
    if (number % 100 !== 0) {
        if (number % 100 < 21) {
            res.push(numbers[number % 100]);
        } else {
            res.push(numbers[Math.floor((number % 100) / 10) + 18]);
            if (number % 10 !== 0) res.push(numbers[number % 10]);
        }
    }
    return res.join(" ") || "zero";
};
