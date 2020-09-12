import React from 'react'
import { heroes } from '../../data/heroes'
import { HeroesScreen } from '../heroes/HeroesScreen';

export const MarvelScreen = () => {

    const getHeroesByPublisher = () => {
        return heroes.filter((item) => item.publisher === "Marvel Comics");
    };

    const heroesMARVEL = getHeroesByPublisher();

    console.log(heroesMARVEL);
    return (
        <div>
            <h1>MARVEL SCREEN</h1>
            <hr />

            <HeroesScreen heroes={heroesMARVEL} />
        </div>
    )
}
