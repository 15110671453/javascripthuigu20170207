/**
 * Created by admindyn on 2017/2/8.
 */
// 创建正则表达式

// var boxReg = new RegExp('Box','gi');//必须传入一个参数 第一个参数是字符串-模式字符串
// //第二个参数为 可选模式修饰符 i 表示忽略大小写（匹配的时候不关心大小写） g 全局匹配() m多行匹配
//
// alert(boxReg);
//
// //
// var boxReg2 = /Box/;//使用字面量创建正则表达式
//
// var boxReg3 = /Box/ig;//使用字面量的方式 创建正则

//正则表达式 提供两个方法 test 和 exec 功能基本相似 test 在字符串中测试匹配模式 成功 返回true 或false
//exec 在字符串中执行成功后 返回该查找字符串的相关信息数组 如果失败会返回null



var pattern = new RegExp('Box','i');//不区分大小写

var str = 'box';
alert(pattern.test(str));
alert(pattern.exec(str));

var pattern2 = /(box)+/ig;
var pattern3 = /box/ig;//+号

var str2 ='this is a box';//匹配成功  字符串中是否包含正则中的模式即可 决定成功
var str3 = 'this b is o x';//匹配失败
var str4 = 'this box is box';//匹配成功 字符串中是否包含正则中的模式即可 决定成功

alert(pattern2.test(str4));
alert(pattern2.exec(str4));


