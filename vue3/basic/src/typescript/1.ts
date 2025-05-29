//订单id类型
// 类型别名，定义自定义类型
type orderid=number;

// 可能id现在是number 、string、bigint
// 联合类型
type id=number|string|bigint;


type Gender="man"|"woman";
type person={
    name:string;
    age:number;
    info:{
        gender:Gender;
    }
}

type Pig={
    name:string;
    age:number;
    hobby:{
        eat:boolean;
    }
}

// 交叉类型
type Animal =person & Pig;
const animal:Animal={
    name:'1',
    age:12,
    info:{
        gender:'man',
    },
hobby:{
    eat:true
}
}