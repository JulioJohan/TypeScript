(()=>{

    const hero: string = 'Flash';

    function returnName():string {
        return hero;
    }
    const activateBatiSinal = (): string =>{
        return 'BatiSenal Activada';
    }
    console.log(typeof activateBatiSinal);

    const heroName = returnName();

    const nombreHeroe = ():string =>{
        return 'Nombre de tu heroe es:'
    } 

    nombreHeroe()
})()