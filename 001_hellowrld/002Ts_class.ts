//Ts 中的class
class Person2
{
    name:string;    //属性  前面省略了public关键词

    constructor(n: string) //构造函数  实例化类的时候触发的方法
    {
        this.name = n;

    }

    run(): void
    {
        console.log(this.name);
    }

    getName():string
    {
        return this.name;
    }

    setName(n: string):void
    {
        this.name = n;
    }
}

var p = new Person2('张三');
p.run();

//Ts中实现继承  extends super

class Person3
{
    name:string;
    constructor(name :string)
    {
        this.name = name;
    }
}

var p2 = new Person3('张世勇');
console.log(p2.name);

class Web extends Person3
{
    constructor(name: string)
    {
        super(name);   //初始化父类的构造函数
    }
}


//类里面的修饰符 ts里面  定义属性的时候给我们提供了3中修饰符 public protected private
 


//静态方法 静态属性
// function $
// {
//     return new Base(element);
// }

// function Base(element)
// {
//     this.element = 获取dom节点;
//     this.css = function(arr, value)
//     {
//         this.element.style.arttr = vaule;
//     }
// }

// $.get = function ()
// {

// }

//jqueyr   $('#box').css('color','red')   $.get('url', () => 
//{

//})

class People 
{
    public name: string;
    constructor(name: string)
    {
        this.name = name;
    }

    run()
    {
        console.log(this.name);
    }

    static work ()
    {
        console.log(  'work');
    }
}


//多态 也是继承的一种的表现

//Ts中的抽象类: 他是提供其他类型继承的基类,不能直接实例化.
//用abstract关键字定义抽象类和抽象方法,抽象类中的抽象方法不包含具体实现并且必须要在派生类中实现
//abstract抽象方法只能放在抽象类里面
//抽象类和抽象方法定义标准

abstract class Animation2
{
    public name: string;
    constructor(name: string)
    {
        this.name = name;
        console.log('erget');
    }

    abstract eat():any;
}

class Dog extends Animation2
{
    constructor(name: string)
    {
        super(name);
    }

    eat()
    {
        console.log(this.name + '狗吃肉');
    }

}

//abstract抽象方法只能放在抽象类里面


abstract class Animal
{
    abstract eat():any;

}


//接口 
//接口的作用  在面向对象编程中,接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范作用。接口定义了
//某一批类的所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里的方法实现细节，他只规定了这批类里必须 提供某些方法，提
//供这些方法的类就可以满足实际需要。typescript中的接口类似java。同时还增加了更灵活的接口类型，包括属性,函数，可索引和类等。


// ts中自定义方法传入参数对对象 哈希表进行约束
function printLable(labelObject: {label: string})
{
    console.log(labelObject.label);
}

let myObj = {size: 10, label: "Size 10 object"};
printLable(myObj);

//接口: 行为和动作的规范  对批量方法的进行约束

interface FullName  //属性接口 对参数 对象的约束
{
    firstName: string; 
    secondName: string;
}

function printName(name: FullName)
{
    //必须传入对象 firstName secondName

    console.log('-----------------\n' + name.firstName + '\n' + name.secondName + '\n-----------------');
}

printName({
    firstName: '张',
    secondName: '世泳',
    age: 20
});

//接口可选属性
interface FullName2
{
    firstName: string;
    secondName: string;
}

function getName(name: FullName)
{
    console.log()
}

// interface Config
// {
//     type: string;
//     url: string;
//     data?: string;
//     dataType: string;

// }

// function ajax(config: Config)
// {
//     var xhr = new XMLHttpRequest();
//     xhr.open(config.type, config.url, true);
//     xhr.send(config.data);
//     xhr.onreadystatechange = function ()
//     {
//         if(xhr.readyState == 4 && xhr.status == 200)
//         {
//             console.log('成功');
//             if(config.dataType == 'json')
//             console.log(JSON.parse(xhr.responseText));
//             else console.log(xhr.responseText);
//         }
//     }
// }

// ajax({
//     type: 'get',
//     data: 'name=zhangsan',
//     url: 'http://a.itying.com/api/productlist',
//     dataType: 'json',

// })

//函数类型接口:对方法传入的参数 以及返回值进行约束


//加密的函数类型接口
interface encrypt
{
    (key:string, vaule:string):string
}
var md5:encrypt = function(key: string, vaule:string ):string
{
    return key + vaule;
}

console.log(md5('name:', '张世勇'));


//可索引接口 数组 对象的约束
interface UserArr
{
    [index: number]: string
}

var arr: UserArr = ['1212','545465'];

//可索引接口  对对象的约束
interface UserObj
{
    [index:string]:string
}

var arr1: UserObj = {name: '20'};

interface Animal3 
{
    name: string;
    eat(str: string):void;
}

//类 类型接口  和抽象类 有点相似
class Panda implements Animal
{
    name: string
    constructor(name :string)
    {
        this.name = name;
    }
    eat()
    {
        console.log(this.name + '吃竹子');
    }
}

var d= new Dog('小黑');
d.eat();

//接口扩展  接口继承接口 

interface Animal5
{
    eat():void;
}

interface Person extends Animal5
{
    work():void
    
}

class Something implements Person
{

}










