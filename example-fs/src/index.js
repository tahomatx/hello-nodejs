const fse = require('fs-extra');
const fs = require('fs');
const path = require('path');

const filepath = path.resolve(__dirname, '../data/sample.txt');
console.log(filepath);

fs.readFile(filepath, (err, contents) => {
  console.log('sample 1*********************************************');
  console.log(contents);
  console.log(contents.toString());
  console.log('*****************************************************');
});

fs.readFile(filepath, { encoding: 'utf-8' }, (err, contents) => {
  console.log('sample 2*********************************************');
  console.log(contents);
  console.log('*****************************************************');
});

const options = { encoding: 'utf-8' };

(async () => {
  console.log('sample 3*********************************************');
  const promise = fse.readFile(filepath, options);
  console.log(promise);
  const contents = await promise;
  console.log(contents);
  console.log('*****************************************************');

  console.log('sample 4*********************************************');
  console.log(await fse.readFile(filepath, { encoding: 'utf-8' }));
  console.log('*****************************************************');
})();
