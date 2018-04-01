//说明指向同一个内存空间
var o1 = {name:'a'};
var o2 = o1;
o1.name = 'b';
o2;//{name:'b'}

//已经指向不同的内存空间
var o1 = {name:'a'};
var o2 = o1;
o1 = {name:'b'};
o2;//{name:'a'}

//fn1通过原型添加了属性，此时两个函数还是指向同一个构造函数
var fn1 = function(){
	return 1;
}
var fn2 = fn1;
fn1.prototype.name = 'b';
fn1.prototype.constructor();//1
fn2.prototype.constructor();//1

//fn1重新赋值了，之前的被覆盖了，此时两个函数指向了不同的构造函数，fn2还是指向原来的构造函数
var fn1 = function(){
	return 1;
}
var fn2 = fn1;
fn1 = function(){
	return 2;
}
fn1.prototype.constructor();//2
fn2.prototype.constructor();//1
