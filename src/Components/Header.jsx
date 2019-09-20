import React, {Component} from 'react'
import houser from './houser.png'

export default class Header extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <header className='dark-header-bar'>
                <img className='house-img' src={houser} alt="house"/>
            </header>
        )
    }
}