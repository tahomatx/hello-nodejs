console.log('hello');

console.log('for and if ******************************************');
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    console.log('hello three!!');
  } else {
    console.log(`hello ${i}`);
  }
}

console.log('while ******************************************');
let index = 0;
while (index < 5) {
  console.log(`hello ${index}`);
  index++;
}

console.log('try-catch ******************************************');
try {
  console.log('trying');
  throw new Error('error');
  console.log('will not run');
} catch (e) {
  console.log(e);
}

console.log('types ******************************************');
const bool = true;
const int = 123456;
const float = 12.3456;
const string = 'hello!';

const array = [];
const object = {};

console.log(bool);
console.log(int);
console.log(float);
console.log(string);
console.log(array);
console.log(object);

console.log('*******');

console.log(int + int);
console.log(int + float);
console.log(bool + int);
console.log(string + int);

console.log('*******');

const func = () => {
  console.log('I am func!');
};
func();
func();

console.log('*******');

const func_with_arg = (data1, data2) => {
  return data1 + data2;
};
console.log(func_with_arg(1, 2));
console.log(func_with_arg(3, 4));

const func_with_arg2 = (data1, data2) => data1 + data2;
console.log(func_with_arg2(1, 2));


console.log('let ******************************************');
let string2 = 'hello!';
console.log(string2);
string2 = 'hello2!';
console.log(string2);


console.log('array ******************************************');
let array2 = ['aaa', 'bbb'];
console.log(array2);

array2[0] = 'array2-0-hello';
console.log(array2);

array2 = [];
console.log(array2);

array2[0] = 'array2-0';
array2[1] = 'array2-1';
const array2_index = 2;
array2[array2_index] = 'array2-2';
console.log(array2);

console.log('object ******************************************');
let object2 = {
  test: 'test',
  test2: 123456,
};
console.log(object2);

object2.test2 = 'test2';
console.log(object2);

object2 = {};
console.log(object2);

object2.test = 'object2-0';
object2.test2 = 'object2-1';
object2['test3'] = 'object2-1';
const object2_name = 'test3';
object2[object2_name] = 'object2-3';
console.log(object2);
