/**
 * Created by admindyn on 2017/2/7.
 */

//通用的方法

var box = new Date(2015,10,15,17,22,45,15);

// alert(box);
//
// alert('toString:'+box.toString());//
//
// alert('toLocaleString:'+box.toLocaleString());// 返回格式
//
// alert('box.valueOf():'+box.valueOf());//返回时间的毫秒数


//日期格式化 专门用于将日期格式化的方法

// alert(box.toDateString());//只显示年月日
// alert(box.toTimeString());//不显示年月日 只显示时间
// alert(box.toLocaleDateString());//只显示年月日 2015／11／15 格式不一样
// alert(box.toLocaleTimeString());//只显示时间  下午 5：22：45
// alert(box.toUTCString());//显示完整的日期 年月日 加 时间



//date 的组件方法  获取 年份 月份 日子  时间


var box2 = new Date();
alert(box2.getFullYear());//那一年
alert(box2.getMonth());//几月
alert(box2.getDay());//星期几
alert(box2.getDate());//几月几号
alert(box2.getTimezoneOffset());//与utc相差的时间
















