// 三目运算符  确定条件类型
// extends
// 1.继承
class person {}
class student extends person {}
// 2.约束泛型
function say<T extends { id: string }>(a: T): T {
  return a;
}
say({ id: "1", name: "n" });
// 3.条件类型
type isstring<T> = T extends string ? true : false;
const isString:isstring<string>=true

//工具类型
type ceshi={name:string; age:number}
// 只想要其中一个或多个参数
// 只要name一个
type nameceshi=Pick<ceshi,"name">
// 移除age 
type ageceshi1=Omit<ceshi,"age">
