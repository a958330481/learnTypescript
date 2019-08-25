interface Human{
    name:string;
    eat():void;
}
//接口interface只能约束类的公有(public)成员
class Asian implements Human{
    constructor(name:string){
        this.name = name
    }
    name:string
    eat(){}
    sleep(){}
}

class Chinese extends Asian{
    constructor(name:string){
        super(name)
        this.name=name
    }
    name:string
    eat(){
        console.log('我们在吃')
    }
}

let ch = new Chinese('a')

console.log(ch.eat())

//接口和类的关系

//接口(interface)之间可以相互继承（extends），从而实现接口的复用

//类（class）之间也可以相互继承(extends)，实现方法和属性的复用

//接口是可以通过类来实现的(implements),但是接口只能约束类的公有成员(public)

//接口也可以抽离出(extends)类的成员,包括:public、private、protected


interface Man extends Human{
    run():void
}

interface Child{
    cry():void
}

interface Boy extends Man,Child{}

let boy:Boy={
    name:'',
    run(){},
    eat(){},
    cry(){}
}

//接口继承类

class Auto{
    state:number=1
}

interface AutoInterface  extends  Auto{

}

class C implements AutoInterface{
    state=1
}

class Bus extends  Auto implements AutoInterface{

}



console.log(Bus)