import { runInContext } from "vm";

class Dog{
    constructor(name:string){
        this.name = name
    }
    name:string
    run(){}
}

//无论在es6还是ts中，“类的成员属性”都是实例属性，而不是原型属性
//“类的成员方法”都是“原型方法”

console.log(Dog.prototype) //{run: ƒ, constructor: ƒ},不包含内部属性，只有constructor和run方法



//创建类的实例

let dog=new Dog('wangwang')

console.log(dog) //Dog {name: "wangwang"},内部属性在实例上，不在原型上

//与es6不同，实例的属性必须具有初始值，或者在构造函数（constructor）中被初始化


//类的继承

class Husky extends Dog{
    constructor(name:string,color:string){
        //派生类的构造函数必须包含“super”调用；super代表父类的实例
        //父类构造函数中包含参数name,则子类中也一定要有
        super(name)
        this.color = color;//this一定要在super之后调用
    }
    color:string
}


//类的修饰符
/**
 * 类修饰符
 * 1. public: 所有人可见（默认）。
 * 2. private: 只能被类本身调用，不能被类的实例调用，也不能被子类调用;构造函数也可以被私有化，私有化后，既不能给实例化，也不能被继承
 * 3. protected: 只能在类或类的子类中调用。
 * 4. readonly: 只读属性，一定要被初始化，不可被修改。
 * 5. static: 静态属性，可以通过类名调用,不可通过子类调用；可以被继承
 */


//抽象类:只能被继承，无法被实例化
//优点：可以抽离出事务的共性，利于代码的复用和拓展
//另外：抽象类也可以实现多态
//多态：在父类中定义一个抽象方法，在多个子类中对这个方法有不同的实现；在运行的时候，可根据不同的对象运行不同的操作

abstract  class Animal{
    eat(){
        console.log('eat')
    }
    //抽象方法
    abstract sleep():void
}

//let animal = new Animal() //无法创建抽象类的实例。

class Cat extends Animal{
    constructor(name:string){
        super()
        this.name=name
    }
    name:string
    run(){}
    sleep(){
        console.log('cat sleep')
    }
}
let cat = new Cat('喵喵')
cat.eat()




//多态

class Bird extends Animal{
    sleep(){
        console.log('bird sleep')
    }
}

let bird = new Bird();

console.log(bird.sleep())//bird sleep
console.log(cat.sleep())//cat sleep

//特殊的ts类型:this类型

class WorkFlow{
    step1(){
        return this;
    }
    step2(){
        return this;
    }
}

new WorkFlow().step1().step2() //实现方法的链式调用

//this类型也可以实现子类的多态调用

class MyFlow extends WorkFlow{
    next(){
        return this;
    }
}

new MyFlow().next().step1().next().step2()

let this1: WorkFlow = new MyFlow().next().step1().next().step2();
let this2: WorkFlow = new MyFlow().next().step1();
let this3: WorkFlow = new MyFlow().step1();
console.log( this1 ); // MyFlow{}
console.log( this2 ); // MyFlow{}
console.log( this3 ); // MyFlow{}

//MyFlow 是 Workflow的子类，所以它们的类型是兼容的，也可以看成等价，就是不做区分。
