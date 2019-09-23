import React, {Component} from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import routes from '../routes'

export default class Wizard extends Component {
    constructor() {
        super()

    }
    
    render(){
        return(
        <div className='light-box-parent'>
            <div className='light-box'>
                {/* {routes} */}
                    
                
            </div>
        </div>
        )
    }
}

// {() => this.createHouse()}
// {() => this.props.history.go('/')}