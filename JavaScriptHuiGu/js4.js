/**
 * Created by admindyn on 2017/2/7.
 */
// var  box = 250;// 十进制 整型
// alert(box);
// // 八进制数 前导数必须是0
//
// var box8 = 070;//八进制 079 是无效的八进制  以8 为进制是不能超过8的
// alert(box8);//按照十进制输出 56
//
// var box16 = 0xA;//十六进制必须是0x 开始
// alert(box16);//十进制输出 10
//
// var boxFloat = 3.8;
//
// alert(boxFloat);//浮点数
// //由于浮点数值保存的内存空间比整型的内存空间大
// //因此会自动转换数据
// //浮点数最高精度 是17位小数
// //科学计算法 对于过大或者过小的数 使用e
//
// var boxE = 4.12e3;
//
// var boxE2 = 4.12e-2;
//
// alert(boxE);
//
// alert(boxE2);
// //浮点数 不要用做判断
// alert(0.1+0.2);
// //如果使用的值 超过了 Number 数据类型的最大值或者最小值
// // 会怎样 输出的是 -infinity  infinity
// alert(Number.MAX_VALUE);
// alert(Number.MIN_VALUE);
// alert(Number.POSITIVE_INFINITY);
// alert(Number.NEGATIVE_INFINITY);

//

// var boxN = 100e1000;
// alert(isFinite(boxN));//判断数值是否超出范围 未超出 true 超出false
//
// var boxN2 = 0 / 0;//nan not a number
//
// // alert(boxN2);//nan not a number
// //
// // alert(Number.NaN);
//
// alert(isNaN(boxN2));
//isNaN 函数 也适用于对象 在调用isNaN函数过程中
//首先会调用valueof 方法，然后确定返回值是否能够
// 转换成数值 如果不能 则基于这个返回值再调用toString方法
// 再测试返回值
// alert(isNaN('15'));//字符串数值 隐式转换为数值
// alert(isNaN('li'));//不能转换为数值 返回true

//
// var  boxObj = {};
//
// alert(isNaN(boxObj));//这里返回true
//
// //但是 如果boxObj 的 toString方法 返回 数值 则 不是nan 返回false
//
// var  boxObj2 = {
//     toString:function () {
//         return '123';
//     }
// };
//
// alert(isNaN(boxObj2));//这里返回true
//
// //数值类型 转换
//
// alert(Number(true));//返回1
// alert(Number(null));//返回0
// alert(Number(undefined));//返回NaN
//
// alert(Number(''));//返回0

// 由于Number函数 在转换字符串为数值时 比较复杂

// 我们提供parseInt 函数 该函数 是专门来转换字符串为数值类型的

// alert(parseInt('456Lee'));//从第一个数值开始取到最后一个连续数值结束
// alert(parseInt('Lee456Lee'));//如果第一个不是数字 就返回NaN
//
// alert(parseInt('56.12Lee')); //返回56 .不是数值
//
// alert(parseInt('0x1f',16));//指明十六进制
// alert(parseInt('101101',2));//指明二进制
// alert(parseInt('070',8));//指明八进制

// 小数处理 使用 parseFloat

alert(parseFloat('12.4'));
alert(parseFloat('0123.400'));
alert(parseFloat('123.4e10'));
alert(123e2);