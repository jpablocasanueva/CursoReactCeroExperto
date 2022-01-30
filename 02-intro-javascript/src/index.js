import { heroes } from "./data/heroes";

console.log(heroes);

const getHeroesById = ( id ) => {
    return heroes.find( heroe => heroe.id === id);
}

console.log( getHeroesById(2) ); 

const getHeroesByOwner = ( owner ) => {

    return heroes.filter( heroe => heroe.owner === owner)

}

console.log(getHeroesByOwner('Marvel'));