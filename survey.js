const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your  name? ', (answer) => {
  console.log(`Nicknames are also acceptable: ${answer}`);

  rl.close();
});
