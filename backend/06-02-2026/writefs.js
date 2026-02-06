const fs = require('fs');

async function writeFileAsync() {
    try {
        await fs.writeFile('output.txt', 'Hello, this is a test file!', 'utf8');

        const data ={name: 'John', age: 30, city: 'New York'};
        await fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');
        
        console.log('File written successfully');
    } catch (err) {
        console.error('Error writing file:', err);
    }
}
writeFileAsync();

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