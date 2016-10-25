const chalk = require('chalk');
const readline = require('readline');
const crypto = require('crypto');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(chalk.yellow('Enter Password \n>>> '), (pwd) => {
  const hashedpwd = crypto.createHash('md5').update(pwd).digest("hex");
  console.log(chalk.green('Hashed pwd: '), chalk.green(hashedpwd.slice(0,20)));
  rl.close();
});
