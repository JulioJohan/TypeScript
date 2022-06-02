import axios from 'axios';
import { Pokemon } from '../interfaces';


export const getPokemon = async(pokemonId:number):Promise<Pokemon>=> {

   const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId} `)
   //console.log(resp.data.abilities[0].ability.url)
   
   return data
}   



// import { getPokemon } from './generics/get-pokemon';

// getPokemon(4)
// .then(pokemon=> console.log(pokemon.sprites.front_default))
// .catch(error => console.error(error))
// .finally(()=> console.log('Fin de getPockemon'))