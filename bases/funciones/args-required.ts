(()=>{
    //Excepcion si se acepta el campo sea dos tipos de dato(string | boolean)
    const fullName = (firstName: string, LastName: string): string =>{
        return `Primer Nombre:${firstName} y Segundo Nombre: ${LastName || 'no Last Name'}`;
    }

    const name = fullName('Tony','Stark');
    console.log({name})


   

})()