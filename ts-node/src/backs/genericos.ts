import { printObject,genericFunction, genericFunctionArrow } from "../generics/generics";
import { Hero, Villain } from "../interfaces";
// import { Villain } from "./interfaces/villain";
// import { Hero } from "./interfaces/hero";


//Generico = cualquier dato



// printObject(123);
// printObject(new Date()),;
// printObject([1,2,3,4,5]);

// const name:string = 'Julio Johan'
// console.log(genericFunction(3.14).toFixed(2))
// console.log(genericFunction(name).toUpperCase())
// console.log(genericFunction(new Date()).getFullYear())

// console.log(genericFunctionArrow(name))

// const deadpool = {
//      name: 'Deadpool',
//      realName: 'Wade Winston',
//      dangerLevel:130
// }
// console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel)

const ironman = {
    name: 'ironman',
    realName: 'Tony Stark',
    dangerLevel: 150
}

console.log(genericFunctionArrow<Hero>(ironman).realName)