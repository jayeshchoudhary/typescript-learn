// types by interface 
var myName = "jayesh";
// use in object
var user = {
    name: "jayesh",
    age: 23
};
// use in class
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    return UserAccount;
}());
var userobj1 = new UserAccount("Murphy", 1);
// or 
var NewUserAccount = /** @class */ (function () {
    function NewUserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    return NewUserAccount;
}());
var userobj2 = new NewUserAccount("Murphy", 1);
// return values and args to function 
function add(a, b) {
    return a + b;
}
var myUser = function (user) {
    user.name = "sumeet";
    return user;
};
var currName = "jayesh";
currName = 12;
function getLength(obj) {
    return obj.length;
}
// array type
var arr = ['one', 'two', 'three'];
var arr2 = ["one", "two", "three"];
// object is a string, because we declared it above as the variable part of Backpack.
var object = backpack.get();
// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add("wild craft");
// tuple 
var myArr = [12, "jayesh", true];
// type assertion 
// explicitly tell typescript to treat value as another type or entity
var cid = "jayesh";
var newId = cid;
newId = 1;
