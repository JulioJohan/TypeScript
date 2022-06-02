(()=>{
    const addNumbers = (a: number, b: number) => a+b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    
   
   

    //! myFunction = 10;
    //! console.log(myFunction)

    //tipo funcion poniendo los argumentos de la funcion 
    //let myFunction: (y: number, z:number)=> number;
    // myFunction = addNumbers;
    // console.log(myFunction(1 ,2))


    //?Funcion tipo string
    //?let myFunction:(y: string)=> string;
    // myFunction = greet;
    // console.log(myFunction('Johan'))


    let myFunction:()=> string;
    myFunction = saveTheWorld;
    console.log(myFunction())

    const nombres = (name: string) => {
        return `Hola: ${name}`
    }   
    let obteniendoNombres: (name:string) =>string ;
    obteniendoNombres = nombres;
    console.log(obteniendoNombres('Johan'));

    const nombreHeros = (nombre:string) =>{
        return `${nombre}`
    }
    let nombresH: (nombres:string) => string
    nombresH = nombreHeros;
    console.log(nombresH('Saitama'))
    
    

})()