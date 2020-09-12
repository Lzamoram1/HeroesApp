import React from 'react'
import { heroes } from '../../data/heroes'
import { HeroesScreen } from '../heroes/HeroesScreen';

export const DcScreen = () => {

    const getHeroesByPublisher = () => {
        return heroes.filter((item) => item.publisher === "DC Comics");
    };

    const heroesDC = getHeroesByPublisher();

    console.log(heroesDC);
    return (
        <div>
            <h1>DC SCREEN</h1>
            <hr />

            <HeroesScreen heroes={heroesDC} />
        </div>
    )
}
