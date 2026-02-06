const fs = require('fs');

async function readFileAsync() {
    try {
        const data = await fs.promises.readFile('index.html', 'utf8');
        console.log(data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}
readFileAsync();

const {promisify} = require('util');
const readFilePromise = promisify(fs.readFile);

async function readFileWithPromisify() {
    try {
        const data = await readFilePromise('myfile.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error('Error reading file with promisify:', err);
    }
}
readFileWithPromisify();