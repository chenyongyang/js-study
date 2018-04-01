/*
	同样是对象，基于不同的数据类型就有不同的属性和方法
	关键看如何调用和调用后返回值是什么
 */

var oDate1 = new Date();
oDate1.a = 'abc';
oDate1.b = say;
function say (){
	return 'hello world';
}
/*console.log(oDate1.a);//abc
console.log(oDate1.b());//hello world
console.log(typeof oDate1);//object
console.log(oDate1 instanceof Date);//ture
console.log(oDate1 instanceof Object);//ture*/
/*console.log(oDate1.toLowerCase());//这个对象根本就没有这个方法，is not a function
console.log(Object.prototype.toString.call(oDate1) === '[object Date]');//true
console.log(Object.prototype.toString.call(oDate1));//[object Date]*/

var oDate2 = Date();
oDate2.a = 'abc';
oDate2.b = say;
function say (){
	return 'hello world';
}
console.log(oDate2);
console.log(oDate2.length);
console.log(oDate2.slice(4,7));
console.log(oDate2.replace(/\s+/g, ""));
/*
	可以使用字符串对象本来就有的属性和方法，其实就是调用了字符串对象原型上的方法
 */
//console.log(String.prototype.slice.call(oDate2,4,7));//截取部分字符
//console.log(String.prototype.replace.call(oDate2,/\s+/g, ""));//去空格
/*console.log(oDate2.a);//undefined
console.log(oDate2.b);//undefined
console.log(typeof oDate2);//string
console.log(oDate2 instanceof Date);//false
console.log(oDate2 instanceof Object);//false*/

/*console.log(oDate2.toUpperCase());//这个对象有这个方法就可以执行
console.log(Object.prototype.toString.call(oDate2) === '[object Date]');//false
console.log(Object.prototype.toString.call(oDate2));//[object String]*/

/*
	为什么都是对象，前者可以自定义属性和方法，而后者却不可以？
	要可以自定义属性和方法，首先它必须是一个对象
	因此，前者是一个对象，而后者不是对象
	检测一下两者是否是对象？怎么检测？
	typeof? instanceof? 
	经检测，前者毫无疑问是一个对象；而后者是字符串类型，并不是哪个类的实例
	既然不是实例，不是对象，为什么有方法呢？调用的是字符串对象原型上的属性和方法
 */

/*
	而且得知道new运算符究竟做了什么？
	1、创建了一个空对象{}
	2、将this绑定在调用者上
	3、返回这个对象

	如果只是调用构造函数，则与调用普通函数一样
	得到的是函数的返回值
	那具体要看内置对象的构造函数返回值是什么了
 */