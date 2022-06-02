(()=>{
  // Objetos
const batimovil :{carroceria: string,modelo: string,antibalas:boolean,pasajeros: number} = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee:{carroceria: string, modelo: string, antibalas: boolean,pasajeros:number ,disparar?:()=>void} = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados
type Villano = {
  nombre: string,
  edad: number | undefined,
  mutante:boolean
}

const villanos: Villano[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];


type Charles ={
  poder:string;
  estatura: number;
}
// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
console.log('Paso por aqui')

const charles: Charles ={
  poder:"psiquico",
  estatura: 1.78
};

type Apocalipsis={
  lider: boolean;
  miembros: string[];
}
console.log('Paso por aca')

const apocalipsis:Apocalipsis = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: Apocalipsis | Charles;

mystique = charles;
mystique = apocalipsis;



})()


