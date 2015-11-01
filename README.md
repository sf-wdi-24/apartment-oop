# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Apartment Rental App

**Objective:** Model functionality for an apartment rental app using object constructors, prototypes, and inheritance.

## Minimum Requirements

* Implement constructors and prototype methods for `Person`, `Manager`, `Tenant`, `Property`, `ApartmentBuilding`, and `Unit` (see starter code in those files)
* Implement the prototypal inheritance for the following:
  * `Manager` inherits from `Person`
  * `Tenant` inherits from `Person`
* Make sure all tests are passing (to run tests, type `npm test` in your Terminal)

## Bonus

* Create a new file `src/inherits.js` and implement an `inherits` function:

  ```js
  var inherits = function(Child, Parent) {
    Child.prototype = new Parent();
    Child.prototype.constructor = Child;
  };

  module.exports = inherits;
  ```

  Then require the `inherits` module in each file that require inheritance, and use the function to DRY up your code.

* Write more tests! You'll find some simple tests in the `test` sub-directory. Once you have all the tests passing, try adding a couple more for edge cases. For example:

## Getting Started

1. Fork this repo, and clone it into your `develop` folder on your local machine.

2. Change directories into `apartment-oop`, and run `npm install` in your Terminal. This installs the testing modules (`mocha` and `chai`) locally into your project repo.

3. Instructions for implementing each module are in their respective files, so poke around in `person.js`, `manager.js`, `tenant.js`, `property.js`, `ApartmentBuilding.js`, and `unit.js`. Read the comments to guide your implementation.

### Playing In Console

The `main.js` file is set up to allow you to test your models in the node REPL.

* Open the node REPL and `require('./src/main.js')`:

  ```zsh
  ➜  node
  > var app = require('./src/main.js');
  ```

* Create a new instance of `Person`:

  ```zsh
  > var Person = app.Person;
  > var john = new Person('John Doe', '123-456-7890');
  > john.contact
  '123-456-7890'
  ```

## Submission

* As you make code changes, frequently commit and push to GitHub.
* Once you've finished the assignment and pushed your work to GitHub, make a pull request from your fork to the original repo.
