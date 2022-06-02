(()=>{

    type Hero = {
        name:string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad','Viajar en el tiempo']
    }
    let supeman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super Velocidad'],
        getName():string{
            return this.name;
        }
    }


    type Personajes = {
        name: string;
        katana: string;
        colorPelo: string;
        obtenerName: () => string
    }

    let rengoku: Personajes ={
        name: 'rengoku',
        katana: 'Katana color negro',
        colorPelo: 'naranja' ,    
        obtenerName(){
            return this.name;
        } 
    }
    console.log(rengoku.obtenerName())

})()