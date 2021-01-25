import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { Home } from './Pages/Home'
import { Details } from './Pages/Details'

export const Routes = ()=>{

    return(
        <div>
            <Switch>
               <Route exact path = '/' component={Home}/>
               <Route path = '/movie/:id' component={Details}/>                 
            </Switch>
        </div>
    )
}