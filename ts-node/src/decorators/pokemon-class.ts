
function printToConsole(constructor: Function){
    console.log(constructor)
}

const prinToConsoleConditional = (print: boolean = false): Function =>{ 
    if(print){
        return printToConsole;
    }else{
        return ()=>{}
    }
}

const bloquearPrototipo = function (constructor: Function){
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

function checkValidPokemonId(){
    return function(target: any, propertyKey: string,desctiptor:PropertyDescriptor){
        const originalMethod = desctiptor.value;

        desctiptor.value = (id:number) =>{
            if(id< 1 || id> 800){
                return console.error('El id del pokemon debe de ser entre 1 y 800')
            }else{
                return originalMethod(id)
            }
        }
        
    }
}

function redOnly (isWritable:boolean = true):Function{
    return function(target:any, propertyKey:string){
        const descriptor: PropertyDescriptor ={
            get(){
                console.log(this);
                return 'Fernando';
            },
            set(this, val){
                Object.defineProperty(this,propertyKey,{
                    value:val,
                    writable: !isWritable,
                    enumerable:false
                })
            }
        }
        return descriptor;
    }
}

@bloquearPrototipo
@prinToConsoleConditional( false)
export class Pokemon {

    @redOnly()
    public publicApi: string = 'https://pokeapi.co'

    constructor(
        public name: string,
    ){}

    @checkValidPokemonId()
    savePokemonToDB(id:number){
        console.log(`Pokemon guardado en DB${id}`)
    }
}