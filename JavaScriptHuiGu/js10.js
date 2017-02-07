/**
 * Created by admindyn on 2017/2/7.
 */

/*
*
* Object 对象 是 存储与 传递数据的理想选择
*
*
* */


var box = new Object();

alert(box);//返回值 [object Object]

alert(typeof box);//返回数据类型 object

//对象  包含 那些 元素

//1 属性   （字段）
//2 方法 (函数)

box.name = '新浪网';

box.age = 20;

//使用 字面量的方式 创建 对象
//
// var  box2 = {
//     x:100,
//     y:200
// }
//
//
// alert(box2.x);
//使用 字面量方式 创建对象  对象 中的属性 名 可以使用 单引号 或 双引号 括起来的


var  box3 = {
    'name':'dyn',
    'age':100
}

// alert(box3.name);

//在获取对象的属性 值 时  除了 使用点语法 获取 也可以通过数组形式获取
//但是 用数组获取时  传递给数组形式的中括号 中必须是属性名的字符串

// alert(box3['age']);


function objRun() {

    return '123';
}

var boxObj = new Object();

boxObj.run = objRun;

alert(boxObj.run);//返回的是函数引用的值 是整个函数的代码块
// 调用方法 或函数 如果没有 圆括号 会打印 函数代码块  如果加圆括号 会打印 函数的返回值
alert(boxObj.run());



var boxDelete = {
    name: '北京'
}

delete boxDelete.name;

alert(boxDelete.name);//返回 undefined 因为 已经 delete了




// 函数传参 参数过多 这个时候 通过对象的传参


function boxObjRef(obj) {

    if (obj.name2 != undefined)
    {
        alert(obj.name);
    }else
    {
        alert('没有name2');
    }
    if (obj.name != undefined)
    {
        alert(obj.name);
    }



}

var  obj = {
    name:'obj传参',
    age:'20',
    love:'羽毛球',
    height:'170',
    address:'北京'
}

boxObjRef(obj);












