import React, {Component} from 'react'
import houser from './houser.png'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <header className='dark-header-bar'>
                <Link to='/'>
                    <img className='house-img' src={houser} alt="house"/>
                </Link>
            </header>
        )
    }
}