(()=>{

    interface Client {
        name:string,
        age?:number,
        address: Address,
        getFullAdress(id:string ):void;
    }

    interface Address {
        id: number,
        zip: string,
        city: string
    }

    const client:Client = {
        name: 'Johan',
        age: 25,
        address: {
            id: 125,
            zip:'KY2 SUD',
            city: 'Ottawa',
        },
        getFullAdress(id:string){
            return this.address.city
        }
    }

    const client2: Client ={
        name: 'Fani',
        age: 20,
        address:{
            id:12,
            zip:'YKY SEW',
            city:'Toronto'
        },
        getFullAdress(id:string){
            return this.address.city
        }
    }

})()