"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Ts 中的class
var Person2 = /** @class */ (function () {
    function Person2(n) {
        this.name = n;
    }
    Person2.prototype.run = function () {
        console.log(this.name);
    };
    Person2.prototype.getName = function () {
        return this.name;
    };
    Person2.prototype.setName = function (n) {
        this.name = n;
    };
    return Person2;
}());
var p = new Person2('张三');
p.run();
//Ts中实现继承  extends super
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
    }
    return Person3;
}());
var p2 = new Person3('张世勇');
console.log(p2.name);
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    return Web;
}(Person3));
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
var People = /** @class */ (function () {
    function People(name) {
        this.name = name;
    }
    People.prototype.run = function () {
        console.log(this.name);
    };
    People.work = function () {
        console.log('work');
    };
    return People;
}());
//多态 也是继承的一种的表现
//Ts中的抽象类: 他是提供其他类型继承的基类,不能直接实例化.
//用abstract关键字定义抽象类和抽象方法,抽象类中的抽象方法不包含具体实现并且必须要在派生类中实现
//abstract抽象方法只能放在抽象类里面
//抽象类和抽象方法定义标准
var Animation2 = /** @class */ (function () {
    function Animation2(name) {
        this.name = name;
        console.log('erget');
    }
    return Animation2;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + '狗吃肉');
    };
    return Dog;
}(Animation2));
//abstract抽象方法只能放在抽象类里面
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
//接口 
//接口的作用  在面向对象编程中,接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范作用。接口定义了
//某一批类的所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里的方法实现细节，他只规定了这批类里必须 提供某些方法，提
//供这些方法的类就可以满足实际需要。typescript中的接口类似java。同时还增加了更灵活的接口类型，包括属性,函数，可索引和类等。
// ts中自定义方法传入参数对对象 哈希表进行约束
function printLable(labelObject) {
    console.log(labelObject.label);
}
var myObj = { size: 10, label: "Size 10 object" };
printLable(myObj);
function printName(name) {
    //必须传入对象 firstName secondName
    console.log('-----------------\n' + name.firstName + '\n' + name.secondName + '\n-----------------');
}
printName({
    firstName: '张',
    secondName: '世泳',
    age: 20
});
function getName(name) {
    console.log();
}
var md5 = function (key, vaule) {
    return key + vaule;
};
console.log(md5('name:', '张世勇'));
var arr = ['1212', '545465'];
var arr1 = { name: '20' };
//类 类型接口  和抽象类 有点相似
