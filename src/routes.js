import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Wizard from './Components/Wizard'
import Step1 from './Components/Step1'
import Step2 from './Components/Step2'
import Step3 from './Components/Step3'

export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        {/* <Route path='/wizard/step1' component={Wizard}/> */}
        <Route path='/wizard/step1' component={Step1}/>
        <Route path='/wizard/step2' component={Step2}/>
        <Route path ='/wizard/step3' component={Step3}/>
    </Switch>
)