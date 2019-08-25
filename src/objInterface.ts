interface List{
    readonly id:number;//readonly:只读属性，不允许修改
    name:string;
    age?:number  //可选属性，这种属性可以有也可以没有
}

interface Result{
    data:List[]
}

function render(result:Result) {
    result.data.forEach((value)=>{
        console.log(value.id,value.name,value.age)
        //value.id++  //Cannot assign to 'id' because it is a read-only property.
    })
}

let result = {
    data:[
        {id:1,name:'A',age:10},
        {id:2,name:'B'}
    ]
}

render(result)


//上述接口属性个数都是固定的，如果不确定一个接口中有多少属性的时候，既可以使用可索引类型的接口

//可索引类型接口可以用字符串去索引，也可以用数字去索引

//数字索引的接口

interface StringArray{
    [index:number]:string//用任意的数字去索引StringArray都会得到一个string;相当于声明了字符串类型的数组
}

//字符串索引接口

interface Names{
    [x:string]:string //用任意的字符串去索引Names都会得到一个string;相当于声明了字符串类型的数组
    //[z:number]:string //数字索引和字符串索引可混用
}

let chars:StringArray =  ['a','b']

let chars1:any = ['a','b'];

console.log(chars1['0'])//'a'