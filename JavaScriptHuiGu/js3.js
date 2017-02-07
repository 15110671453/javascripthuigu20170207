/**
 * Created by admindyn on 2017/2/7.
 */
// var box;
// alert(box);
// alert(typeof box);
// //返回值undefined
// // box是Undefined类型 值是undefined
// // typeof操作符类型返回的字符串是undefined
//
// var boxBool= true;
// alert(boxBool)
// alert(typeof boxBool); //类型是Boolen 返回的值是true typeof返回的是boolen
//
// var boxString= 'xinlang';
// alert(boxString)
// alert(typeof boxString); //类型是String 返回的值是xinlang typeof返回的是string
//
// var boxNumber= 100;
// alert(boxNumber)
// alert(typeof boxNumber); //类型是Number 返回的值是100 typeof返回的是number

//空的对象 表示对象创建了 但是里面没东西
// var boxObj1= {};
// alert(boxObj1)
// alert(typeof boxObj1); //类型是Object 返回的值是[object Object] typeof返回的是object
// //创建空对象的第二种方式
// var boxObj2= new Object();
// alert(boxObj2)
// alert(typeof boxObj2); //类型是Object 返回的值是[object Object] typeof返回的是object
//
// var boxObj= {x:1,y:2};
// alert(boxObj)
// alert(typeof boxObj); //类型是Object 返回的值是[object Object] typeof返回的是object
//
// //空对象
// var boxNull= null;
// alert(boxNull)
// alert(typeof boxNull)//类型是Null 返回的值是null typeof操作符 返回的是object


//函数 不是数据类型 但是也能用typeof 操作符


// function boxFunction() {
//     var box = 100;
//     return box;
//
// }
//
// alert(boxFunction);
//
// alert(typeof boxFunction);
// //boxFunction 是函数 返回的值是整个函数代码整体 typeof 返回的是function


// typeof  可以直接 操作字面量
//typeof 是操作符 使用时 可以typeof(box) 加括号的形式 但是他不是函数


//注意 alert 一个 为定义的变量 会报错  typeof 操作符 操作 一个未定义的变量 也会返回undefined

//
// var box = null;//这个表示 你还没有创建对象 但先声名对象引用 而必须初始化的结果
// //为以后的代码提供使用
// if (box != null)
// {
//     alert('对象已经创建成功');
// }else
// {
//     alert('对象只是定义了一个对象引用,但还未创建');
// }
// //最好在使用定义声名变量时 都初始化 代码规范
// var boxS = '';
// var boxNum = 0;
// var boxBoolen = false;
// // undefined 是派生自 null 的 ECMA 认为是相等的
// // 未初始化的变量和 初始化为null的变量 会相等 因此最好使用typeof操作符进行比较
// alert(undefined == null);//它们都是空的 所以值是相等的理所当然
//
// alert(typeof undefined == typeof null);
// alert(undefined === null);//恒等运算符 数据类型也要相同 才返回true 这里只能返回false
//
//
//
// var boxBool = true;
// alert(boxBool == 1);//true
//
// alert(typeof boxBool == typeof 1);//false
// alert(boxBool === 1);//false
//
//
// var boxKong = '';
// var boxKong2 = 'feikong';
//
// alert(Boolean(boxKong));//false
// alert(Boolean(boxKong2));//true
// //由于if 语句中 必须是布尔值 true 或 false 这里有隐式转换
// if (boxKong)
// {
//     alert('真');
// }else
// {
//     alert('假');
// }

//布尔值的隐式转换
//任何非0数字值都隐式转换为真
//任何非空字符串 返回真  0或NaN 返回假
//任何对象 空的对象 都是返回真 null 返回假
//undefined 都是返回假   只要声名不初始化 都会返回假
// 对于不声名的变量 直接使用会报错 但是typeof 一个不声名的变量不报错



var boxUndefined2;
if (boxUndefined2)
{
    alert('真2');
}else
{
    alert('假2');
}
if (boxUndefined)
{
    alert('真1');
}else
{
    alert('假1');
}






