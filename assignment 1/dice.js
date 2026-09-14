const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

function rollDice() {
    const randomBuffer = crypto.randomBytes(1);
    const randomNum = (randomBuffer[0] % 6) + 1;
    return randomNum;
}

const historyFile = path.join(__dirname, 'dice_history.txt');
fs.writeFileSync(historyFile, `Dice Roll History - ${new Date().toISOString()}\n`, { flag: 'a' });

for (let i = 0; i < 5; i++) {
    const result = rollDice();
    console.log(`\uD83C\uDFB2 Dice Rolled: ${result}`);
    fs.appendFileSync(historyFile, `Dice Rolled: ${result}\n`);
}
