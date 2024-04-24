// There are multiple ways to define objects, but in most cases, it is best to use the object literal syntax as follows:

const myObject = {
  property: 'Value',
  otherProperty: 77,
  "obnoxious property": function() {
    // do stuff!
  }
};

// You can use dot notatiion or bracket notation to get the data or info from an object
// dot notation
myObject.property; // 'Value'
// bracket notation
myObject["obnoxious property"]; // [Function]

// You can create object constructors as follows:
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name);
  }
}

// Create objects using the constructor:
const player1 = new Player("Steve", "X");
const player2 = new Player("Mark", "O");

// Exercise, build a Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return(`${this.title} by ${this.author}, ${this.pages} pages, ${read ? 'read':'not read yet'}`)
  }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(theHobbit.info());

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}`);
}

Player.prototype.getMarker = function() {
  console.log(`My marker is ${this.marker}`);
}

Object.setPrototypeOf(Player.prototype, Person.prototype);