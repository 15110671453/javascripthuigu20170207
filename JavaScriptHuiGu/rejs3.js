/**
 * Created by admindyn on 2017/2/8.
 */

// var patten = /g.gle/;
// var str ='g!gle';
//
// alert(patten.test(str));
//
//
// var patten2 = /g..gle/;
// var str2 ='g!gle';
//
// alert(patten2.test(str2));
//
//
// var patten3 = /g.gle/;
// var str3 ='this is g!gle';
//
// alert(patten3.test(str3));
//
// var patten4 = /g.gle/;
// var str4 ='this is g\ngle';
//
// alert(patten4.test(str4));

// -----------------------------
// var patten5  = /go*gle/;//* 代表星号前面的模式字符出现 0 个 1 个 或多个 次数
//
// var str5 = 'goooogle';
//
// alert(patten5.test(str5));
//
// var patten6  = /go+gle/;//+ 代表加号前面的模式字符出现  1 个 或多个 次数
//
// var str6 = 'ggle';
//
// alert(patten6.test(str6));
//
// var patten7  = /go?gle/;//? 代表问号前面的模式字符出现  1 个 或0个 次数
//
// var str7 = 'ggle';
//
// alert(patten7.test(str7));
//
// var patten8  = /go{2,4}gle/;//o{2,4} 表示匹配o 2-4 次 包含2次 4次 少于2次返回假 多于4次返回假
//
// var str8 = 'goooogle';
//
// alert(patten8.test(str8));
//
// var patten9  = /go{4}gle/;//o{24} 表示限定该字符只能出现4次 否则就匹配失败
//
// var str9 = 'gooogle';
//
// alert(patten9.test(str9));
//
// var patten10  = /go{4,}gle/;//o{4,} 表示o字符出现4次或4次以上
//
// var str10 = 'goooogle';
//
// alert(patten10.test(str10));
// ------------------------------------

var patten11  = /[a-z]oogle/;//[a-z] 表示26个小写字母 任意一个出现都可以匹配


var str11 = 'xoogle';

alert(patten11.test(str11));
//


var patten12  = /[a-zA-Z0-9]oogle/;
//表示匹配大小写a-zA-Z0-9

var str12 = 'xoogle';

alert(patten12.test(str12));


var patten13  = /[^a-z]oogle/;//[^a-z] 表示非a-z的任意字符 任意一个出现都可以匹配


var str13 = '+oogle';

alert(patten13.test(str13));


var patten14  = /^[a-z]oogle/;//[a-z] 表示非a-z的任意字符 任意一个出现都可以匹配


var str14 = 'xoogle';

alert(patten14.test(str14));


var patten15  = /[a-z]oogle/;//[a-z] 表示非a-z的任意字符 任意一个出现都可以匹配


var str15 = 'xxoogle';

alert(patten15.test(str15));

var patten16 = /^[a-z]oogle/;//[a-z] 表示非a-z的任意字符 任意一个出现都可以匹配


var str16 = 'xxoogle';

alert(patten16.test(str16));

var patten17 = /^[a-z]oogle[0-9]*$/;//[a-z] 表示非a-z的任意字符 任意一个出现都可以匹配


var str17 = 'xxoogle66';

alert(patten17.test(str17));


































