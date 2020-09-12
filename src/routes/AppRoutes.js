import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { HeroesScreen } from '../components/heroes/HeroesScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { NavBar } from '../components/navbar/NavBar'

export const AppRoutes = () => {
    return (
        <Router>
            <NavBar />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={HeroesScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/marvel" component={MarvelScreen} />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
