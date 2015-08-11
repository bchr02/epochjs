# epochjs version 1.0.0
Track the elapsed time since a certain point, like the start of a node script.

## Examples:
````
var epoch = require('epochjs');

// Call start() to set a start time
epoch.start();

// ...add your javascript code here

// when ready to see the amount of time that has ellapsed call secElapsed()
console.log(epoch.secElapsed() + ' time has ellapsed');

// or even simpler call log()
// the following will output to the console "5.11 database updated" where 5.11 is the amount of time that has ellapsed.
epoch.log('database updated')

````
