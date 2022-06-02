import powers from "../data/powers"

export class Hero {
    constructor(
        public name:string,
        public powerId:number,
        public age:number
    ){}

    get power():string{
        return powers.find(power => power.id === this.powerId)?.desc || 'Not found';
    }
}

export class OnePunch{}
export class OnePiece{}

export const Pi:number = 3.1416
export const miNombre: string = 'Johan'