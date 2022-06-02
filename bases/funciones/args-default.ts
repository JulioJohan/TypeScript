(()=>{
    //? = opcional
    //Excepcion si se acepta el campo sea dos tipos de dato(string | boolean)
    //Argumerntos opcionales son al final
    const fullName = (firstName: string, LastName: string, upper = false): string =>{
       
       if(upper){
        return `Primer Nombre:${firstName} y Segundo Nombre: ${LastName}`.toUpperCase();
       }else{
        return `Primer Nombre:${firstName} y Segundo Nombre: ${LastName}`;
       }
        
    }

    const name = fullName('Tony','Stark', true);
    console.log({name})


})()
