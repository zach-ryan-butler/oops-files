const fs = require('fs');
const { join } = require('path');

const dir = join(__dirname, 'files');

function readFiles(dir, callback) {
    fs.readdir(dir, (err, data) => {
        if(err) throw err;
        return callback(null, data);
    });
}

const filesArray = readFiles(dir, files => {

});







