const isEven = require('./modules/isEven');
const logger = require('./modules/logger');

logger("Starting application...");

const number = 4;
logger(`Is ${number} even? ${isEven(number)}`);

logger("Application finished.");
