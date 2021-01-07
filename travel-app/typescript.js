var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var str;
var num;
var bool;
var whatever;
var strArr;
strArr = ["Hi", "Please", "check"];
var numArr;
numArr = [1, 2, 3, 4];
var strnumTuple;
strnumTuple = ["okay", 5];
var myvoid = null;
var mynull = null;
var myundefined = undefined;
function getSum(num1, num2) {
    return num1 + num2;
}
var mysum = function (num1, num2) {
    return num1 + num2;
};
function showTodo(todo) {
    console.log(todo.title + ": " + todo.text);
}
var myTodo = { title: "trash", text: "take it out" };
showTodo(myTodo);
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User Created: " + this.name);
    }
    User.prototype.register = function () {
        console.log(this.name + " is now registered");
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + "'s paid invoice");
    };
    return User;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var comAge = combine(20, 50);
console.log(comAge);
var comName = combine("Mike", "Tommy");
console.log(comName);
var person = {
    name: "Peter",
    age: 30,
    hobbies: ["swimming, cooking"]
};
console.log(person);
var mike = new Member(1, "Mike", "mike@gmail.com", 26);
mike.register();
console.log(strArr);
