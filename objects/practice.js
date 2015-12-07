/*Once you complete a problem, open up Chrome and check the answer in the console.*/

// 1 //
// ME //
/*Create an object called me. 
Give it a key of name with the value being your name, 
and another key of age with the value being your age. 
Then alert your name using dot notation.*/
var me = {
  name: "Phillip",
  age: 27
};
console.log(me.name);

// 2 //
// FAVORITE THINGS //
/*Make a 'favoriteThings' object that contains the following keys: 
band, food, person, book, movie, holiday. 
Have the values to those keys be your favorite thing in that category.*/
var favoriteThings = {
  band: "None",
  food: "Pizza",
  person: "SF",
  book: "Google",
  movie: "Many",
  holiday: "Thanksgiving",
};

/*After you've made your object, add another key named 'car' 
with the value being your favorite car and then another key named 'brand' 
with the value being your favorite brand.*/
favoriteThings.car = 'Jeep';
favoriteThings.brand = 'IDK';

/*Now change the food key in your favoriteThings object to be 'Lettuce'*/
/*and change the book key in your favoriteThings object to be '50 Shades of Gray'.*/
favoriteThings.food = 'Lettuce';
favoriteThings.book = '50 Shades of Gray';

// 3 //
// BACKPACK //
/*Create an empty Object called backPack.*/ 
/*Now, create a variable called 'item' and set it equal to the string 'firstPocket'.*/ 
/*Using bracket notation, add a 'firstPocket' key (or property) to backPack, using 'item'.*/
/*Set the value of that key to 'chapstick'.*/
/*Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */
var backPack = {};
var item = 'firstPocket';
backPack[item] = 'chapstick';
backPack.color = 'green';
/*After you do the above, alert your entire backPack object.*/
alert(backPack);
/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */
console.log(backPack);



// 4 //
// ME //
/*Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. 
Fill those properties in with the appropriate values.*/
var me = {
  name: "Phillip",
  age: 27,
  height: "5'6",
  gender: "Male",
  relationshipStatus: "Single",
  eyeColor: "Cinnamon Brown",
  hairColor: "Dark Brown"
};
/*Now, loop through your object and alert every value.*/
for (var prop in me) {
  console.log(prop + ": " + me[prop]);

}

// 5 //
// ALBUM //
/*Create an Object called 'album' with 5 keys named different song titles that you make up, 
with the values being the length of each song.*/
var album = {
  "title one": "1:00",
  "title two": "2:00",
  "title three": "3:00",
  "title four": "5:00",
  "title five": "8:00"
};
/*Now, loop through your album object alerting every song title individually.*/
for (var title in album) {
  console.log(title);         // logs the song "title".
  console.log(album[title]);  // logs the value of the 'property'.
  console.log(album);         // logs the entire 'object'.
}

// 6 //
// US STATES //
/*Create an object called states that has 5 US states as properties with the values being their population 
(doesn't have to be accurate).*/
var states = {
  "Utah": 5000,
  "Nevada": 100000,
  "Arizona": 80000,
  "Colorado": 6000,
  "Idaho": 4000
};
/*Now, loop through your states object and if the states population is greater than 30K, alert that state.*/
for (var state in states) {
  if (states[state] > 30000) {
    console.log(states[state]);
  }
}

// 7 //
// USER //
var user = {
  name: 'Phillip',
  email: 'phillippuckett88@gmail.com',
  pwHash: "I don't even know what this means",
  birthday: '03/22/1988',
  username: 'phillippuckett88',
  age: 27
};
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object.*/
for (var prop in user) {
  if (!user[prop]) {    // look closely at the inversion NOT (or rather "!") for truthy/falsy
    delete user[prop];
  }
}
console.log(user);

// 8 //
// USER //
var user = {
  name: 'Tyler McGinnis',
  age: 24,
  pwHash: 'U+Ldlngx2BYQk',
  email: 'tylermcginnis33@gmail.com',
  birthday: '05/02/1990',
  username: 'tylermcginnis33',
  sayName: function () {
    console.log('Email is : ' + this.email);
  }
};
/*Let's say I, the user, decided to change my name and email address to the following:
name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.*/
user.name = 'Tyler S. McGinnis';
user.email = 'tyler.mcginnis@devmounta.in';

/*Now call the sayName method that's on the user object which will alert the users email*/
console.log(user.sayName());

// 9 //
// METHOD COLLECTION //
/*Create an empty object called methodCollection.*/
var methodCollection = {};
methodCollection.alertHello = function () {
  alert("Hello");
};
methodCollection.logHello = function () {
  console.log("Hello");
};
methodCollection.alertHello();
methodCollection.logHello();
/*Above add two methods (functions that are properties on objects) to your methodCollection
object: One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' 
to the console. */

// 10 //
// MAKE PERSON //
/*Create a function called MakePerson which takes in name, birthday, ssn 
as its parameters and returns a new object with all of the information that you passed in.*/
var makePerson = function (name, birthday, ssn) {
  var person = {
    name: name,
    birthday: birthday,
    ssn: ssn
  };
  return person;
};
console.log(makePerson("Phillip", "03/22/1988", "000-00-0000"));

// MakeCard //
/*Create a function called MakeCard which takes in all the data it needs to make a 
Credit Card object and returns that object so that whenever you invoke MakeCard, 
you get a brand new credit card.*/
var makeCard = function (cardName, cardNum, expDate, secCode) {
  var creditCard = {
    cardName: cardName,
    cardNum: cardNum,
    expDate: expDate,
    secCode: secCode
  };
  return creditCard;
};
console.log(makeCard("PHILLIP E PUCKETT", "0000 0000 0000 0000", "01/2011", "123"));
  
// 12 //
// Linking Everything Together //
/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.*/
/*Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.*/
/*Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard.*/

var card = makeCard("PHILLIP E PUCKETT", "0000 0000 0000 0000", "01/2011", "123");
var customer = makePerson("Phillip", "03/22/1988", "000-00-0000");

var bindCard = function (person, creditCard) {
  var boundCard = {};
  for (var cardProp in creditCard) {
    boundCard[cardProp] = creditCard[cardProp];
  }
    for (var personProp in person) {
    boundCard[personProp] = person[personProp];
  }
  return boundCard;
};
console.log(bindCard(customer, card));

// 13 //
// Making Twins //
var makePerson = function (name1, age1, interest1) {
  var person = {
    name1: name1,
    age1: age1,
    interest1: interest1
  };
  return person;
};
console.log(makePerson("Phillip", 27, "Women and Status"));

var makeBrother = function (name2, age2, interest2) {
  var brother = {
    name2: name2,
    age2: age2,
    interest2: interest2
  };
  return brother;
};
console.log(makeBrother("Michael", 27, "Women and the Human Psyche"));

var firstBorn = makePerson("Phillip", 27, "Women and Status");
var secondBorn = makeBrother("Michael", 27, "Women and the Human Psyche");

var makeTwins = function(person, brother) {
  var twins = {};
  for (var pProp in person) {
   twins[pProp] = person[pProp];
  }
    for (var bProp in brother) {
   twins[bProp] = brother[bProp];
  }
  return twins;
};
console.log(makeTwins(firstBorn, secondBorn));