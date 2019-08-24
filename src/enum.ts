/**
 * 枚举：一组有名字的常量集合
 * 枚举成员的值是只读类型，声明后不可修改
 * 可在TypeScript Playground查看js对应实现：  http://www.typescriptlang.org/play/index.html
 */

 //数字枚举:实现原理反向映射
 enum Role{
     Reporter = 1,
     Developer,
     User
 }

 //字符串枚举
enum Message{
    Success='成功',
    Fail='失败',
    Error='错误'
}

//异构枚举:可以同时支持数字和字符串；但比较容易引起混淆，一般不建议使用
enum Answer{
    N,
    Y ='Yes'
}

//枚举成员
enum Char{
    //const
    a,
    b = Char.a,
    c = 1+3,
    //computed
    d = Math.random(),
    e = '123'.length,
    f = 6
}

//常量枚举:
const enum Month{
    Jan,
    Feb,
    Mar
}

let month = [Month.Jan,Month.Feb,Month.Mar]

console.log(month)

//枚举类型

enum E {a,b} //成员无初始值

enum F {a=0,b=1} //所有成员都是Number类型

enum G {a='a',b='b'} //所有成员都是String类型

let e:E=3
let f:F=3

//不同类型的枚举不可比较

let e1:E.a = 1
let e2:E.b
//e1===e2:不同成员，不可比较
let e3:E.a = 1

e1 === e3 //相同成员可比较

let g1:G
let g2:G.a


//作业

const enum UserRole{
    role1=111,
    role2=156,
    role3='1111',
    role4=12,
    role5=45,
    role6=6
}

console.log(typeof(UserRole.role3))

function initByRole(role:number){
    switch(role){
        case UserRole.role1:
            //todo
            break;
            case UserRole.role1:
                //todo
                break;   
            case UserRole.role2:
                //todo
                break;   
            case UserRole.role3:
                //todo
                break;  
            case UserRole.role4:
                //todo
                break;   
            case UserRole.role5:
                //todo
                break;
            default:
                //todo
            break
    }
}






