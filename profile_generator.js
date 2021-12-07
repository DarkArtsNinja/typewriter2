const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What you favorite sport? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

});

rl.question('What vehicle do you prefer? boat, car, plane, drone, even horse ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.close();

});

console.log("testing")
