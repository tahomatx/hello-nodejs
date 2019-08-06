const fse = require('fs-extra');
const path = require('path');

const filepath = path.resolve(__dirname, '../data/sample.txt');
const options = { encoding: 'utf-8' };

(async () => {
  console.log('sample 2*********************************************');
  try {
    const promise = fse.readFile(filepath, options);
    console.log(promise);
    const contents = await promise;
    console.log(contents);
  } catch (error) {
    console.log('エラー');
    console.log(error);
  }
  console.log('*****************************************************');


  console.log('sample 3*********************************************');
  try {
    const contents = await fse.readFile(filepath, { encoding: 'utf-8' });
    console.log(contents);
  } catch (error) {
    console.log('エラー');
    console.log(error);
  }
  console.log('*****************************************************');
})();
