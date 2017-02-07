/**
 * Created by admindyn on 2017/2/7.
 */
var boxObj = new Object();//Object 可以传参 传数值 字符串 布尔值 会执行toString


alert(boxObj);


var boxObj2 = new Object(2);

alert(boxObj2);
//这种方法 也是创建一个数值对象 typeof类型还是Object  但是 是一个number数值对象
// 一般使用一个数值没必要使用一个对象
var boxNum = new Number(60);
//这种方法 也是创建一个字符串对象 typeof类型还是Object  但是 是一个字符串对象
// 一般使用一个字符串没必要使用一个对象
var boxStr = new String('Lee');

//


