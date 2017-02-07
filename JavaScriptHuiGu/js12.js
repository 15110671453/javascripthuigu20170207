/**
 * Created by admindyn on 2017/2/7.
 */

// var box = ['1','一样的？',3,new Date()];
//
//
// alert(box);
//
// alert(box.toString());
// alert(box.valueOf());//上面的三个 输出 一样
// alert(box.toLocaleString());//这里不一样  当有日期时


//将数组 通过 指定的 分割符 拼接为 字符串
var box2 = [1,2,3,4,5];

alert(box2.join('|'));//方法运行后返回按|分割的字符串
// 原数组的类型  还是 Object



// ECMA数组 提供了一种 让数组的行为 类似于 出栈 入栈的方法 push pop 后进先出

// push 方法 为数组 追加元素 并返回追加后 数组的元素个数

// var box6 = ['meng',1,2,'上海'];
//
// box6.push('nali','运城');
//
// alert(box6);
//
// //pop 移除数组最后的一个元素 并且返回移除的那个元素
//
// alert(box6.pop());
// // 栈方法 是 后进先出   队列方法 先进先出
//
//
// alert(box6.shift());//移除开头的一个元素 并且返回该元素
//
// alert(box6.unshift('前段添加')); //向数组的前端添加一个元素 并且返回最新的长度
//
// alert(box6);

// //数组的排序  reverse 逆向排序 sort 从小到大排序
//
//
// var box7 = [1,2,3,4,5];
//
// alert(box7.reverse());//方法 执行后返回一个逆序后的数组
// // 原数组也被逆向排序了  这是对数组的引用进行操作的
//
// alert(box7);
//
// var box8 = [4,6,1,3,7,8,9];
//
// alert(box8.sort());//从小到大排序 返回的是一个排序后的数组 默认 对字符串排序 对数字排序 需要 传递参数
//
// alert(box8);
//
// // sort 排序 是需要传递一个参数 传递的是一个 函数
//
//
//
// function compare(value1,value2)
// {
//     if (value1 < value2)
//     {
//         return -1;
//     }else  if ( value1 > value2)
//     {
//         return 1;
//     }else {
//         0;
//     }
//
// }
//
//
// var box9 = [0,1,5,10,15];
//
// alert(box9.sort());
// alert(box9.sort(compare));


// var box = [1,2,3,4];
//
// var box10 = box.concat('新的数组');
//
// alert(box10);//基于原来的数组 生成新的数组 原数组不受影响
//
// alert(box);



// var box = [1,2,3,'上海','IOS','beijing','123'];
//
// var box11 = box.slice(1,3);//这里不是从第一个位置取三个 而是从第一个位置取到第三个位置
//
// alert(box11);//从原数组截取新的数组  原数组不受影响
//
// alert(box);

var box = [11,12,13,'上海','IOS','beijing','123'];

var  box12 = box.splice(0,2);//这里表示从第0个位置取两个

alert(box12);//该函数 执行后 返回 删除的 元素 并以数组的形式返回 原数组受影响

alert(box);


var box14  = [11,12,13,'上海','IOS','beijing','123'];

var box13 = box14.splice(1,0,'计算机编程','插入点');

alert(box13);//splice 插入

alert(box14);


var box14  = [11,12,13,'上海','IOS','beijing','123'];

var box13 = box14.splice(1,1,'计算机编程','插入点');

alert(box13);//splice 替换

alert(box14);












































































