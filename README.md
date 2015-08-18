# epochjs version 2.0.0
Track the elapsed time since a certain point, like the start of a node script.

[![NPM](https://nodei.co/npm/epochjs.png?downloads=true&stars=true)](https://nodei.co/npm/epochjs/)

## Installation:
Run `npm install epochjs` to install from the NPM registry.


## Examples:
````javascript
var Epochjs = require('epochjs'),
	epochjs = new Epochjs();

// Call start() to set (or reset) the start time.
// start() is called at the start of the script by default.
epochjs.start();

// ...add your javascript code here

// when ready to see the amount of time that has ellapsed call secElapsed()
console.log(epochjs.secElapsed() + ' time has ellapsed');

// or even simpler call log()
// the following will output to the console "5.11 database updated" where 
// 5.11 is the amount of time that has ellapsed since start().
epochjs.log('database updated');

````
