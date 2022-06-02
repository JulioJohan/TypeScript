(()=>{

    class Avenger {
        constructor(
            public name:string,
            public realName:string,
        ){
            // console.log('Constructor Avenger llamado')
        }
        protected getFullName():string{
            return `Nombre: ${this.name} Nombre Real: ${this.realName}`
        }

        
       
    }

    class XMen extends Avenger {

        constructor (
            public name: string,
            public realName: string,
            public isMutant:boolean
        ){

            //super 
            super(name, realName)
            // console.log('Constructor Xmen llamado')
        }

        
        getFullNameDesdeXmen(){
            // console.log(super.getFullName())
        }
        get fullName():string{
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name: string){

            if(name.length < 3 ){
                throw new Error ('El nombre debe ser mayor de 3 letras')
            }

            this.name = name;
        }
    }

    const wolverine = new XMen('wolverine','Logan',true)
   // wolverine.getFullNameDesdeXmen()
   //console.log(wolverine.fullName)

   wolverine.fullName = 'Joh'
//    console.log(wolverine.fullName)


   class OnePiece {
       public nombre:string;
       public conTripulacion: boolean;

    get nombrePersonaje ():string{
        return `${this.nombre}`
    }
    set nombrePersonaje(nombre: string){
        if(nombre.length < 4 ){
            throw new Error ('El nombre del Personaje debe ser mayor de cuatro caracteres')
        }
        if(nombre.length > 20){
            throw new Error ('El Nombre del Personaje esta muy largo')
        }
        this.nombre = nombre
    }
}


    const zoro:OnePiece = new OnePiece()

    zoro.nombrePersonaje = 'Zoro'
    // console.log(zoro.nombrePersonaje)
    
})()