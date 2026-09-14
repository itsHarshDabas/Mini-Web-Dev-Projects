const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, 'test.txt');

console.log("Creating File...");
fs.writeFile(filename, 'Hello Node.js\n', (err) => {
    if (err) {
        console.error("Error creating file", err);
        return;
    }
    console.log("File Created");

    console.log("Reading File...");
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file", err);
            return;
        }
        console.log(data.trim());

        console.log("Updating File...");
        fs.appendFile(filename, 'Learning FS Module\n', (err) => {
            if (err) {
                console.error("Error updating file", err);
                return;
            }
            console.log("File Updated");
            
            console.log("Reading File again...");
            fs.readFile(filename, 'utf8', (err, updatedData) => {
                if (err) return;
                console.log(updatedData.trim());

                console.log("Deleting File...");
                fs.unlink(filename, (err) => {
                    if (err) {
                        console.error("Error deleting file", err);
                        return;
                    }
                    console.log("File Deleted");
                });
            });
        });
    });
});
