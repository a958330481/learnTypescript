//原始类型
let bool:boolean=true
let num:number=123
let str:string  = 'abc'

//数组

let arr:Array<number|string> = [1,2,'3']
let arr1:number[]=[1,2,3]


//元组:限定了数组的元素的类型和长度

let tuple:[number,string,number]   =   [0,'a',1]

//元组越界
tuple.push(2)//允许添加，但不允许越界访问

//console.log(tuple.length+":"+tuple[3]) //tuple[3]报错




//函数

let add = (x:number,y:number):number=>x+y

add(1,2)

//函数

let obj:object={x:1,y:2}

//在上述定义的基础上，以下操作是不被允许的

//obj.x=3 //TS2339: Property 'x' does not exist on type 'object'.

let obj1:{x:object,y:string}  = {x:{data:3333,d:{d:1}},y:'2'}

//symbol:具有唯一的值

let s1:symbol = Symbol()

let s2= Symbol()

//undefined,null   :  只能赋值为它本身

let un:undefined=undefined
let nu:null = null

//void:没有任何返回值

let noReturn = ()=>{}

//any：不指定类型，就和js中的没区别，可以赋值任意类型

let  x

x =  1
x = '2'
x  = {a:3}

//never:两种常见的情况：1# 代码抛出异常，无法正常返回；2# 死循环函数，永远都不会返回

let error = ()=>{
    throw new Error('error')
}

let endless = ()=>{
    while(true){}
}

