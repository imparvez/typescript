let myString: string = "Hello World";
let myNum: number = 2;
let myBool: boolean = true;
let myVar: any = {a: 7};

let myArray: string[] = ['a', 'b', 'c']; // Array of strings only
let numArray: number[] = [1, 2, 3]; // Array of numbers only
let boolArray: boolean[] = [true, false, true]; // Array of boolean only

let myStrArray: Array<string> = ['a', 'b', 'c']; // Array of strings only
let myNumArray: Array<number> = [1, 2, 3]; // Array of numbers only
let myBoolArray: Array<boolean> = [true, false]; // Array of boolean only

let strNumTuple: [string, number] = ['hello', 4]; // Array should match said pattern i.e first should be string and second should be number, rest can be anything.

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;

console.log(`myString => ${myString}`);
console.log(`myNum => ${myNum}`);
console.log(`myBool => ${myBool}`);
console.log(`myVar => ${myVar}`);
console.log(`myArray => ${myArray}`);
console.log(`numArray => ${numArray}`);
console.log(`boolArray => ${boolArray}`);
console.log(`myStrArray => ${myStrArray}`);
console.log(`myNumArray => ${myNumArray}`);
console.log(`myBoolArray => ${myBoolArray}`);
console.log(`strNumTuple => ${strNumTuple}`);
console.log(`myNull => ${myNull}`);
console.log(`myUndefined => ${myUndefined}`);