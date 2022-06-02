(()=>{


    //abstract sirven para crear otras clases 
    //Cascarones para crear otras clases
    abstract class Mutante{
        constructor(
            public name:string,
            public realName:string,


        ){}
    }

    class XMen extends Mutante{
        salvarMundo (){
            return 'Mundo A Salvo';
        }
    }
    class Villian extends Mutante{

        conquistarMundo(){
            return 'Mundo Conquistado';
        }
    }

    const wolverine = new XMen('wolverine','Logan');
    const mangneto = new Villian('Magneto','Magnus');

    // console.log(wolverine.salvarMundo());
    // console.log(mangneto.conquistarMundo());

    const printName = (character: Mutante) =>{
        // console.log(character.realName);
    }
    printName(wolverine);


    abstract class Personajes {
        constructor(
            public nombre:string
        ){
        }
    }

    class OnePiece extends Personajes{
        obtener(){
            return console.log('One Pieceee')
        }
    }

    const zoro = new OnePiece('Zoro')
    // zoro.obtener()
    const obtenerNombre = (personajePiece: Personajes) => {
        // console.log(personajePiece.nombre)
    }
    // obtenerNombre(zoro)
})()