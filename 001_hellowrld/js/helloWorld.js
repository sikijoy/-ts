"use strict";
/*
1 第一步 tsc --init 生成tsconfig.json     生产编译的文件路径  改"outDir": "./js"，
2  运行任务 监听 tsc
*/
var str = 'hello world';
console.log(str);
// Ts中为了使编写代码更规范，更有利于维护，增加了类型校验
// ts中必须指定类型
//元组类型 (tuple)     属于数组的一种
//给数组中每一个位置指定一个类型 
var arr = [123, 'this is ts'];
//枚举（enum）
/*enum 枚举名
{
   标识符 [=整型常数]，
   ....
   标识符 [=整型常数]，
}
*/
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 0] = "success";
    Flag[Flag["error"] = 1] = "error";
})(Flag || (Flag = {}));
var s = Flag.success;
var err = Flag.error;
console.log('s= ' + s + '\n' + 'err =' + err);
