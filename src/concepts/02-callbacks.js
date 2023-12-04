import { heroes } from "../data/heroes";

export const callbacksComponent = (element) => {

    const id = "5d86371f2343e37870b91ef1";
    findHero(id, (hero) => {
        // element.innerHTML = hero?.name || 'no hay heroe';
        element.innerHTML = hero.name;

    });
}

const findHero = (id, callback) => {

const hero = heroes.find (hero => hero.id === id);
   
    callback(hero);

}

