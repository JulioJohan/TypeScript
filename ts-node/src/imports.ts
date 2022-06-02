//Alias a una sola importacion(poner otro nombre para que no tenga un conflicto)
// import { Hero as SuperHero, OnePunch } from "./classes/Hero";
//Alias de lo que importa todo 
import { Hero, OnePunch } from "./classes/Hero";

// import * as HeroClases from './classes/Hero';
// import powers,{Power} from './data/powers';

// console.log('Hola Mundo!');


// const ironman = new SuperHero('ironman',1,55);
const ironman = new Hero('ironman',1,55);
console.log(ironman.power);



