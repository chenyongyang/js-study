/*
	Object是所有其他数据类型的父类
 */

var toString = Object.prototype.toString;

console.log(toString.call(Date));// [object Function]
console.log(toString.call(new Date)); // [object Date]
console.log(toString.call(Date()));// [object String]其实是看返回的结果是属于什么类型的对象

console.log('*****************************');

console.log(toString.call(String));// [object Function]
console.log(toString.call(new String)); // [object String]
console.log(toString.call(''));// [object String]

console.log('*****************************');

console.log(toString.call(Math)); // [object Math]
//console.log(toString.call(new Math));// Math is not a constructor
//console.log(toString.call(Math()));//  Math is not a function

console.log('*****************************');

console.log(toString.call(undefined)); // [object Undefined]
console.log(toString.call(null)); // [object Null]

console.log('*****************************');

console.log(toString.call(Function));//[object Function]
console.log(toString.call(new Function));// [object Function]
console.log(toString.call(function(){}));// [object Function]

console.log('*****************************');

console.log(toString.call(Object));//[object Function]
console.log(toString.call({}));//[object Object]
console.log(toString.call(Object()));//[object Object]
console.log(toString.call(new Object));//[object Object]
//经过以上测试，上面所传递的参数都是属于对象类型
//如果要使用诸如：
//var toString = Object.prototype.toString;
//var toString = Function.prototype.toString;
//var toString = Number.prototype.toString;
//等这些都会提示call的第一个参数必须为调用原型的类

