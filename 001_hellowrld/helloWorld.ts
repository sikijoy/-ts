/*
1 第一步 tsc --init 生成tsconfig.json     生产编译的文件路径  改"outDir": "./js"，
2  运行任务 监听 tsc
*/
var str: string = 'hello world'
console.log(str);

// Ts中为了使编写代码更规范，更有利于维护，增加了类型校验
// ts中必须指定类型


//元组类型 (tuple)     属于数组的一种
//给数组中每一个位置指定一个类型 
var arr: [number, string] = [123, 'this is ts'];


//枚举（enum）
/*enum 枚举名 
{
   标识符 [=整型常数]，
   ....
   标识符 [=整型常数]，  
}
*/

enum Flag 
{
    success,
    error,
    'undifind',
}
let s: Flag = Flag.success;
let err: Flag = Flag.error;
let und: Flag = Flag.undifind;
console.log('s= ' + s + '\n' + 'err =' + err + '\n' + 'undifind =' + und);


//任意类型 (any)  用来代替 object 类型  
var num1: any = 1.2;
console.log('num1 =' + num1);
num1 = true;
console.log('num1 =' + num1);
num1 = 'chj';
console.log('num1 =' + num1);

// let obj: any = 
// {
//     a:'123456'
//     b:123,
//     c:
// }


//null 和undifind  其他(never) 数据类型的子类型
var num2: number;   //变量定义没有赋值  undifind  或者找不到该属性
 

//void  表示没有任何类型,
function test(): void 
{
    console.log('test');
}

function test1(): number
{
    return 123;
}


//nerver类型: 是其他类型  （包括null和undefind）的子类型,代表从不会出现的值.这意味着声明never的变量
//只能被never类型所赋值  

//返回never的函数必须在无法达到的终点
function error(mes: string): never
{
    throw new Error(mes);
}

//返回never的函数必须存在无法达到的终点
function infiniteLoop():never
{
    while(true)
    {

    }
}

//object 表示非原始类型,也就是除number,string,boolean,symbol,null或undefined之外
//的类型


//类型断言  比如 as <>泛型 :type


//变量声明 let var const   let与var 的区别


//解构






//函数定义  
function run():string
{
    return 'run';
}

function GetPlayer(name: string, age?: number )  //?:代表可选 参数 可传可不传
{
    console.log('name =' + `${name}` + '\nage=' + `${age}`);
} 

//注意可选参数 必须要配置到参数列表的 最后面


GetPlayer('chj', 123);
GetPlayer('张世泳');

//参数赋 初始值
function GetPlayer2(name:string, age:number = 20)
{
    console.log('name =' + `${name}` + '\nage=' + `${age}`);
}
GetPlayer2('chj', 123);
GetPlayer2('张世泳');


//  剩余参数 ...运算符  接受行参传过来的值
function Sum(...result: Array<number>):number
{
    var sum = 0;
    for(var i = 0; i < result.length; i++)
    {
        sum += result[i];
    }
    return sum;
}

var res1 = Sum(1,2,3,4);
console.log(res1);


//函数重载  typescript 中的重载: 通过为同一个函数提供多个函数类型定义来实现多种功能目的
//ts 为了兼容es5 以及es6 重载的写法和java 中有区别
//es5 出现同名 下面的方法会重写上面吧的方法
    /*function css(config: any): any
    {

    }

    function css(config: any, vaule: any)
    {

    }
   */


//ts中的重载   同名函数的具体实现放在最后any 函数中  通过 typeof 来判断类型  再具体实现

function css(config: string):string;
function css(config: any, vaule: any):string;
function css(config: any, vaule?: any): any
{
    if(typeof config ==='string')
    {
        return config;
    }
    if(vaule)
    {
        return config + '' + name;
    }
}

//labmda 表达式




//es5   类继承  
function Person(name, age)
{
    this.name = name; 
    this.age = age
    this.run = function()
    {
        console.log(this.name + '在跑')
    }
}

Person.prototype.sex = "男"  
Person.prototype.work = function()   // 成员函数  实例方法 可以被继承
{
    console.log(this.name + '在工作');
}

//Web类  继承Person类   原型链 + 对象冒充的组合继承模式
function Man()
{
    Person('张世泳', 20).call(this);   //对象冒充实现继承
}

var m = new Man();
m.run();                 //对象冒充 可以继承构造函数里面的属性和方法 但是没法继承原型链中的属性和方法
 

//  function Man2(name, age)
//  {

//  } 
//  Man2.prototype = new Person();    //原型链实现继承  可以继承构造函数里面的属性和方法 也可以继承原型链上的属性和方法
// var m2 = new Man2();               //实例化子类的时候没办法给父类传参

 

//原型链 + 构造函数的的组合继承
function Man2(name, age)
{
    Person.call(this, name, age);
}

Man2.prototype = new Person();
var m2 = new Man2('张世泳', 30);









