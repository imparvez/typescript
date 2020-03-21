function getSum(num1, num2) {
    return num1 + num2; // Output should return number
} // Adding parameter and function return value type which is number.
var mySum = function (num1, num2) {
    return num1 + num2;
};
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
}
function myVoid() {
    return;
}
console.log(getSum(1, 4));
console.log(mySum(3, 4));
console.log(getName('john'));
console.log(myVoid());
