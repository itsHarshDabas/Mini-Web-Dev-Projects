const logger = (message) => {
    const timestamp = new Date().toISOString();
    // Cyan color for bonus challenge
    console.log(`\x1b[36m[${timestamp}]\x1b[0m ${message}`);
};

module.exports = logger;
