function getSum(num1: number, num2: number): number {
    return num1 + num2; // Output should return number
} // Adding parameter and function return value type which is number.

const mySum = function(num1: number, num2: number): number {
    return num1 + num2;
}

function getName(firstName: string, lastName?: string): string { // Making lastName optional
    if(lastName == undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
}

function myVoid(): void {
    return;
}

console.log(getSum(1, 4));
console.log(mySum(3, 4));
console.log(getName('john'));
console.log(myVoid());