import { heroes } from "../data/heroes"

export const promiseComponent = (element) => {

    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderError = (error) => {
        element.innerHTML = `
        <h1>Error:</h1>
        <h3>${error}</h3>`;
    }

    const id1 = "5d86371f25a058e5b1c8a65e";
    const id2 = "5d86371f1efebc31def272e2";

    findHero( id1)
        .then(renderHero)
        .catch(renderError);
}

const findHero = (id) => {

   return new Promise(( resolve, reject ) => {

    const hero = heroes.find(hero => hero.id === id);

    if (hero) {
        resolve (hero);
        return;
    } 

    reject(`hero with id ${id} not fund`);

    });


}

