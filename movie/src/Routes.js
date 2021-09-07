import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Details } from './Pages/Details'
import ContainerResults from './Pages/ContainerResults'


export const Routes = () => {

    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/movie/:id' component={Details} />
                <Route path='/:movie' component={ContainerResults} />
            </Switch>
        </div>
    )
}