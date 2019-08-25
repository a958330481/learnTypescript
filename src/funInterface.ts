/**
 * type和interface 多数情况下有相同的功能，就是定义类型。
 * 但有一些小区别：
 * type：不是创建新的类型，只是为一个给定的类型起一个名字。type还可以进行联合、交叉等操作，引用起来更简洁。
 * interface：创建新的类型，接口之间还可以继承、声明合并。
 * 如果可能，建议优先使用 interface。
 */

//let addFun: (x:number,y:number) => number

interface AddFun{
    (x:number,y:number):number
}

//type AddFun=(x:number,y:number)=>number

let addFun:AddFun = (a,b)=>a+b

console.log(addFun(1,222)) //223

//混合接口
//混合接口一般是为第三方类库写声明文件的时候会用到，很多类库名称可以直接当函数调用，也可以有些属性和方法
// 混合接口声明函数和用接口声明类的区别是，接口不能声明类的构造函数（既不带名称的函数），但混合接口可以，其他都一样
interface Lib {
    (): void;
    version: string;
    doSomeThing(): void;
}

//构造器
function getLib() {
    let lib: Lib = (() => {}) as Lib
    lib.version = '1.0'
    lib.doSomeThing = () => {}
    return lib;
}

//使用
let lib1 = getLib();
lib1();
lib1.doSomeThing();
let lib2 = getLib();








