import { Pokemon } from './decorators/pokemon-class';

const charmander =  new Pokemon('Charmander'); 

// (Pokemon.prototype as any).custoName = 'Pikachu'

charmander.savePokemonToDB(50)