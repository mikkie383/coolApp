let str: string;
let num: number;
let bool: boolean;
let whatever: any;

let strArr: string[];

strArr = ["Hi", "Please", "check"]

let numArr: Array<number>;
numArr = [1, 2, 3, 4];

let strnumTuple: [string, number];
strnumTuple = ["okay", 5];

let myvoid: void = undefined;
let mynull: null = null;
let myundefined: undefined = undefined;

function getSum(num1: number, num2: number) : number{
    return num1 + num2;
}

let mysum = function(num1: number, num2: number){
    return num1 + num2;
}

/*
function showTodo(todo: {title: string, text: string}){
    console.log(todo.title + ": " + todo.text);
    
}
let myTodo = {title: "trash", text: "take it out"}
showTodo(myTodo);
*/
interface Todo{
    title: string;
    text: string;
}
function showTodo(todo: Todo){
    console.log(todo.title + ": " + todo.text);
}
let myTodo = {title: "trash", text: "take it out"}
showTodo(myTodo);


interface UserInterface{
    name: string;
    email: string;
    age: number;
    register(): any;
    payInvoice(): any;
}
class User implements UserInterface{
    name: string;
    email: string;
    age: number;

    constructor (name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;

        console.log("User Created: " + this.name);
        
    }

    register(){
        console.log(this.name + " is now registered");
        
    }

    payInvoice(){
        console.log(this.name + "'s paid invoice");
        
    }
}

class Member extends User{
    id: number;

    constructor(id: number, name: string, email: string, age: number){
        super(name, email, age);
        this.id = id;
    }

    payInvoice(){
        super.payInvoice();
    }
}
type comNumStr = number | string;

//union of type
function combine(input1: comNumStr, input2: number | string, resultConvert: "as-num" | "as-str"){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConvert === "as-num"){
        result = +input1 + +input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    return result;
}

const comAge = combine(20, 50, "as-num");
console.log(comAge);
const comName = combine("Mike", "Tommy", "as-str");
console.log(comName);
const comStrAge = combine("30", "23", "as-num");
console.log(comStrAge);


const person ={
    name: "Peter",
    age: 30,
    hobbies: ["swimming, cooking"]
};
console.log(person);


let mike: User = new Member(1, "Mike", "mike@gmail.com", 26);
mike.register();
console.log(strArr);