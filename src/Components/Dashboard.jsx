import React, {Component} from 'react'
import House from './House'

export default class Dashboard extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                Dashboard
                <House/>
            </div>
        )
    }
}