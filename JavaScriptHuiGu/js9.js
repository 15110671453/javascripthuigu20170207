/**
 * Created by admindyn on 2017/2/7.
 */
//函数声名 有参数的 无参数的
//函数声名 已经完成
//函数没有运行功能
//必须调用才可以
function  box() {
    alert('函数只有被调用才会执行');
}
//函数调用 通过函数名 加 圆括号 调用
box();

//函数调用不一定非要在函数声名之后

boxFun('xinlang','10');
function boxFun(name,age) {
    alert('你的名字'+name+' 年龄'+age);
}

// 函数返回值

function  boxReturn() {
    return '我只有被调用才可以执行 return';

}

//打印出函数调用返回的结果
alert(boxReturn());


function boxRe2(name,age) {
    return '你的名字'+name+' 年龄'+age;
}


//打印出函数调用返回的结果
alert(boxRe2(':新浪',':20'));

//函数的arguments 对象

// 不像其他语言需要 将 形参 与 实参 统一起来

function boxArguments()
{
    return arguments[0]+'|'+arguments[1]+'|'+arguments[2]+'|'+arguments[3];
}

alert(boxArguments('新浪','20周年','发红包'));


function boxSum() {

    var sum = 0;

    for(var i =0 ; i<arguments.length;i++)
    {
        sum += arguments[i];
    }

    return sum;

}
//根据不同的参数 调用相同的函数  没有其他语言的重载的功能 相同函数名 但是参数不同的函数 可以执行 没有重载功能
//而是覆盖表了 没有重载功能




































