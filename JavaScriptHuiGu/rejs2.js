/**
 * Created by admindyn on 2017/2/8.
 */

// var pattern = /box/i;//没有开启全局 匹配到第一个字符串就返回数组
//
// var str ='this is a Box! this is a box';
//
// // alert(str.match(pattern))
//
// var pattern2 = /box/ig;//开启全局 会在目标字符串中所有匹配到的字符串组成数组返回
//
// var str2 ='this is a Box! this is a box';
//
// // alert(str2.match(pattern2));
//
// alert(str2.search(pattern2));
// //search方法 查到一个即返回 无需指明 是否全局匹配
// // 找不到返回-1 找到就返回 第一个匹配的位置的下标
//
// alert(str2.replace(pattern2,'Tom'));
// //第一个参数模式 第二个为要替换的内容 最后返回替换后的字符串
// //注意开启全局 不开启全局 只替换第一次匹配成功的位置 开启全局 所有匹配到的位置都替换
//
// var pattern3 = / /ig;//正则表达式的定界符中输入空格 下面按照空格符为分割符 分割为数组
// alert(str2.split(pattern3))



// 正则表达式的静态属性  实例属性、、、

var pattern4 = /(google)/ig;


var str4 = 'this is a google ! that is a google';

alert(pattern4.global);//是否设置全局匹配 g
alert(pattern4.ignoreCase);//是否设置忽略大小写 i
alert(pattern4.multiline);//是否设置多行匹配 m修饰符
alert(pattern4.source);//正则表达式的原字符串

pattern4.test(str4);
alert(pattern4.lastIndex);//没什么用


//
// pattern4.exec(str4);
//
// alert(RegExp.input);
//
// alert(RegExp.leftContext);
// alert(RegExp.rightContext);
// alert(RegExp.lastMatch);
// alert(RegExp.lastParen);//分组
//
// //以上很少用 浏览器都不支持