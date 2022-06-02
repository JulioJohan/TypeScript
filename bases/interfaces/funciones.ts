(()=>{

    interface addTwoNumbers{
        //funcione en una interfaz
        (a:number, b:number): number;
    }

    let addNumbersFunction: addTwoNumbers;

    addNumbersFunction = (a: number, b: number) =>{
        return 10;
    }

})()