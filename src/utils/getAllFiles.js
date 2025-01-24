// from https://www.youtube.com/watch?v=et_bzG3WJDg&list=PLAGWPY8arhLTuAGDgpFL6bhP6RuQ01p87&index=8
const fs = require('fs');
const path = require('path');

module.exports = (directory, foldersOnly = false) => { 
    let fileNames = [];

    const files = fs.readdirSync(directory, { withFileTypes: true });

    for (const file of files) {
        const filePath = path.join(directory, file.name);
        if (foldersOnly) {
            if (file.isDirectory()) {
                fileNames.push(filePath);
            }
        } else {
            if (file.isFile) {
                fileNames.push(filePath);
            }
        }
    }
};