(()=>{

    class Avenger {
        // private name: string;
        // private team: string;
        // public  realName?:string;
        //Propiedades staticas no se pueden declarar en el constructor por que no se puede modificar
         static avgAge: number = 35;
        static getAvgAge(){
            return this.name;
        }


        constructor(
            private name: string , 
            private team: string,
            public realName?: string,
        ){}

        //Metodo

        public bio(){
            return `${this.name} (${this.team})`
        }

    }

    //Objeto de la Clase
    // const antman: Avenger = new Avenger('Antman', 'Capitan','Scott Lang');
    // console.log(antman);
    // console.log(Avenger.getAvgAge);
    //utilizar un atributo estatico
    // console.log(Avenger.avgAge)

    class OnePiece {
        private nombre:string;
        private tripulacion?: string;
        public recompensa: number;

        constructor(nombre:string, tripulacion:string ,recompensa: number){
            this.nombre = nombre;
            this.tripulacion = tripulacion;
            this.recompensa = recompensa;
        }

    }

    const Zoro:OnePiece = new OnePiece('Zoro','Lufy', 200000)


    // console.log(Zoro)
})()