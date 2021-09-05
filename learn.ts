// types by interface 
let myName = "jayesh";

// if you do not provide type to variable ts default puts it type
// this is equal to let myName: string = "jayesh";

// ****  interfaces  ****

interface User {
    name: string,
    age: number,
    email?: string, // optional value
    skills?: []
}

// use in object
const user: User = {
    name: "jayesh",
    age: 23
}

// use in class
class UserAccount implements User {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const userobj1 = new UserAccount("Murphy", 1);

// or 

class NewUserAccount {
    name: string;
    age: number;
   
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
   
  
const userobj2: User = new NewUserAccount("Murphy", 1);

// return values and args to function 
function add(a: number, b: number): number {
    return a + b;
}

const myUser = (user: User): User => {
    user.name = "sumeet";
    return user; 
}


// type

// we should always use interface when possible 
// but type has 2 more feature 

// composing types
type userName = string | number;
type WindowStates = "open" | "closed" | "minimized";

let currName: userName = "jayesh";
currName = 12;

function getLength(obj: string | string[]) {
    return obj.length;
}



// array type
const arr: string[] = ['one','two','three'];

const arr2: Array<string> = ["one", "two", "three"];


// generics 
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;


interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
  }
   
  // This line is a shortcut to tell TypeScript there is a
  // constant called `backpack`, and to not worry about where it came from.
  declare const backpack: Backpack<string>;
   
  // object is a string, because we declared it above as the variable part of Backpack.
  const object = backpack.get();
   
  // Since the backpack variable is a string, you can't pass a number to the add function.
  backpack.add("wild craft");


function getArray<T>(items: T[]) : T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(["one", "two"]);

// tuple 
const myArr: [number, string, boolean] = [12, "jayesh", true];


// type assertion 
// explicitly tell typescript to treat value as another type or entity
let cid: any = "jayesh";
let newId = <number>cid;
newId = 1;