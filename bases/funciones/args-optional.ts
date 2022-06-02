(()=>{
    //? = opcional
    //Excepcion si se acepta el campo sea dos tipos de dato(string | boolean)
    const fullName = (firstName: string, LastName?: string): string =>{
        return `Primer Nombre:${firstName} y Segundo Nombre: ${LastName}`;
    }

    const name = fullName('Tony');
    console.log({name})
    
    const nombreCompletoHeroes = (nombre?: string, apellido?: string):string => {
        return `Nombre:${nombre || 'No hay Nombre'} Apellido: ${apellido || 'No hay Apellido'}`
    }
    const nombreCompleto = nombreCompletoHeroes('Saitama','Good');
    console.log({nombreCompleto})


})()

