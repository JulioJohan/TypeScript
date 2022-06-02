(()=>{


    type Avengers = {
        nick: string, 
        ironman: string,
        vision: string,
        activo: boolean,
        poder:number
    }

    //Objeto
    const avengers:Avengers = {
        nick: 'Samuel L.Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettaney',
        activo: true,
        poder: 1500
    }

    //Desestructurando un objeto
    // const {poder, vision} = avengers
    // console.log(poder,vision.toUpperCase())

    //Desestructurando un objeto en una funcion
    const printAvenger = ({ironman, ...resto}: Avengers):void=>{
        // console.log(ironman, resto);
    }
    
    // printAvenger(avengers)

     //Desestructurando un array
    const avengersArr:[string, boolean, number] = ['Capitan America', true,150.15]
    const [capitan,boolean,number] = avengersArr;
    //console.log(capitan)

    type Pilares = {
        nombre:string,
        edad: number,
        katana: boolean
    }

    const rengoku: Pilares = {
        nombre: 'Rengoku',
        edad: 20,
        katana:true
    }
    const uzui: Pilares = {
        nombre: 'Uzui',
        edad: 24,
        katana: true
    }

    const {nombre,edad,katana} = rengoku;
    console.log();

    const printPilares = ({nombre, ...resto}:Pilares) => {
        // console.log(nombre, resto);
    }
    printPilares(uzui);

    const OnePunch: string[] = ['Saitama','Garou'];
    const [s,g] = OnePunch;
    // console.log(s)

})()