/*
	1、通过对带new和不带new的对比，得出称得上对象的必须得是从类上实例化出来的，否则就不是object类型
	2、但是为什么不是对象还可以使用属性和方法呢？那是因为js原型链
	3、任何数据类型都有自己的原型链，最终都会是一个Object，进而是null
	4、因此本不是对象的数据类型本身并没有属性和方法，其属性和方法是从原型链上获取的
 */

var curtime1 = new Date();
console.log(typeof curtime1);//object
console.log(curtime1.__proto__);//Date {}
console.log(curtime1.__proto__.__proto__);//{}
console.log(curtime1.__proto__.__proto__.__proto__);//null
console.log(curtime1 instanceof Date);//true
console.log(curtime1 instanceof Object);//true
var curtime2 = Date();
console.log(typeof curtime2);//string
console.log(curtime2.__proto__);//String ''
console.log(typeof curtime2.__proto__);//object
console.log(curtime2.__proto__.__proto__);//{}
console.log(curtime2.__proto__.__proto__.__proto__);//null
console.log(curtime2 instanceof Date);//false
console.log(curtime2 instanceof Object);//false
