(() => {

    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
  
    const existe = false;
  
    // Tuplas
    const parejaHeroes = [batman,superman];
    const villano = ['Lex Lutor',5,true];
    const superHero:[string,boolean] = ['Saitama',true] ;
    superHero[0] = 'ironMan'
    superHero[1] = false
    
  
    // Arreglos
    const aliados = ['Mujer Maravilla','Acuaman','San', 'Flash'];
    const numbers: number[] = [1,2,3,4,5];
    const villians:string[] =['Omega Rojo','Dormamamu'];

    villians.forEach(v => console.log(v.toUpperCase()))
    

    //Enumeraciones
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
  
    // Retorno de funciones
    function activar_batiseñal(){
      return 'activada';
    }
  
    function pedir_ayuda(){
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = poder.length;
    console.log( largoDelPoder );
  
  
  })()
  
  