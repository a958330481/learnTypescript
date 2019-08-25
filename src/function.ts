//函数定义的方式

function addFun1(a:number,b:number){
    return a+b
}

//以下三种只是函数类型的定义，而并没有具体的实现
//在实际的调用的时候，要写函数体
let addFun2:(a:number,b:number)=>number

type addFun3 = (a:number,b:number)=>number

interface addFun4{
    (a:number,b:number):number
}

//addFun1(2,3)

let addFun5:addFun3  = (a:number,b:number)=>a+b

console.log(addFun5(1111,1))

//let addFun6:addFun2  


//可选参数:必选参数放到可选参数前

function addFun7(x:number,y?:number){
    return y?x+y:x
}

addFun7(1)
addFun7(1,2)


//参数不固定
function addFun8(x:number,...reset:number[]){
    return x+reset.reduce((prev,cur)=>prev+cur)
}
console.log(addFun8(1,2,3,4,5,6,67))

//重载函数

function addFun9(...rest:number[]):number;
function addFun9(...rest:string[]):string;
function addFun9(...rest:any[]):any{
    let first = rest[0];
    if(typeof first ==='string'){
        return rest.join('')
    }
    if(typeof first ==='number'){
        return rest.reduce((prev,cur)=>prev+cur)
    }
}

console.log(addFun9(1,2,3,4))
console.log(addFun9('a','b','c','d'))



