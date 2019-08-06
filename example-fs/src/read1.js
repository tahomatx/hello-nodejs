const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

const filepath = path.resolve(__dirname, '../data/sample.txt');
console.log(filepath);

fs.readFile(filepath, (error, contents) => {
  if (!error) {
    console.log('sample 1*********************************************');
    console.log(contents);
    console.log(contents.toString());
    console.log('*****************************************************');
  } else {
    console.log('エラー');
    console.log(error);
  }
});

fs.readFile(filepath, { encoding: 'utf-8' }, (error, contents) => {
  if (!error) {
    console.log('sample 2*********************************************');
    console.log(contents);
    console.log('*****************************************************');
  } else {
    console.log('エラー');
    console.log(error);
  }
});

const promise2 = fse.readFile(filepath, { encoding: 'utf-8' });
promise2.then(contents => {
  console.log('sample 3*********************************************');
  console.log(contents);
  console.log('*****************************************************');
}).catch(error => {
  console.log('エラー');
  console.log(error);
});
