/**
 * Created by admindyn on 2017/2/7.
 */


// var box = new Date(); //创建一个 日期对象
// alert(box);//返回的内容 星期几 几月份 几日 那一年 具体时间 GMT 格林尼治时间 时区 东八区
//GMT 格林尼治 标准时间 +0800表示东八区
//UTC 世界同一时间

// var box2 = new Date();//可以传参数 如果没有传参 则默认返回当前的时间 传参指定返回某个时间

//Date.parse() 静态方法  接受一个表示日期的字符串参数
//Date.UTC() 静态方法
// 返回的都是一个毫秒数

// var dateV = Date.parse('4/12/2007');//月 日 年 2007年 4 月 12 日
// var  day = new Date(dateV);//这里传入的毫秒数 不能是毫秒数的字符串 invalid date
// alert(day);


var day2 = new Date('4/12/2007');

alert(day2);//返回的内容 星期几 几月份 几日 那一年 具体时间 GMT 格林尼治时间 时区 东八区

//May 25 ,2015

var day3 = new Date('May 25 ,2015');

alert(day3);//返回的内容 星期几 几月份 几日 那一年 具体时间 GMT 格林尼治时间 时区 东八区

//1月 没有32 号  多出来的 进到2月  火狐 进到2月1号 google 无效的日期 ie 二月1号 opera 是1月30日


//Date.UTC 方法 也是返回表示日期的毫秒数

//必须传入 年份 和 月份  不传 就各种错误 负值  NaN
//0代表 1 月 1 表示二月 10 代表11 月
//UTC 世界协调时间 按照它的区域基准来计算
var day4 = Date.UTC(2007,10,15,17,22,45,15);
//如果不加UTC 则返回本地的时间
alert(day4);




















