const args = process.argv.slice(2);
const operation = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

if (!operation || isNaN(num1) || isNaN(num2)) {
    console.log("Usage: node calculator.js <add|sub|mul|div> <num1> <num2>");
    process.exit(1);
}

switch (operation) {
    case 'add':
        console.log(`Result: ${num1 + num2}`);
        break;
    case 'sub':
        console.log(`Result: ${num1 - num2}`);
        break;
    case 'mul':
        console.log(`Result: ${num1 * num2}`);
        break;
    case 'div':
        if (num2 === 0) {
            console.log("Error: Division by zero is not allowed.");
        } else {
            console.log(`Result: ${num1 / num2}`);
        }
        break;
    default:
        console.log("Invalid operation. Supported operations are: add, sub, mul, div.");
}
