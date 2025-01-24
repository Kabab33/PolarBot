const fs = require('fs');
const path = require('path');

module.exports = (directory, foldersOnly = false) => { 
    let fileNames = [];

    const files = fs.readdirSync(directory, { withFileTypes: true });

};