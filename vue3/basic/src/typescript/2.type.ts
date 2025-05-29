// 只有用的时候在知道类型，我们可以先用泛型来定义
type person<T>={
    name:string
    age:number
    info:T
}
// 添加约束  必须包含   extends 换成=表示默认值  
type person1<T extends {hobby:string[]}>={
    name:string
    age:number
    info:T
}

const 信息:person1<{hobby:string[]}>={
    name:'名字',
    age:1,
    info:{
        hobby:['eat','sleep']
    }
}
const 信息1:person1<{hobby:string[];b:string}>={
    name:'名字',
    age:1,
    info:{
        hobby:['eat','sleep'],
        b:'111'
    }
}

type person2<T = {hobby:string[]}>={
    name:string
    age:number
    info:T
}
const 信息3:person2={
    name:'名字',
    age:1,
    info:{
        hobby:['eat','sleep']
    }
}
const 信息4:person2<{hobby:string[];aaa:string}>={
    name:'名字',
    age:1,
    info:{
        hobby:['eat','sleep'],
        aaa:'12',
    }
}