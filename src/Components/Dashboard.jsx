import React, {Component} from 'react'
import House from './House'
import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            houses: []
        }
    }
    render(){
        let mappedHouses = this.state.houses.map((el, i) => {
            return <House key={i} el={el}/>
        })

        return(
            <div className='light-box-parent'>
                <div className='light-box'>
                    <div className='dashboard-parent'>
                        <h1>Dashboard</h1>
                        <Link to='/wizard'>
                            <button className='new-property-button'>Add New Property</button>
                        </Link>
                        {mappedHouses}
                    </div>
                </div>
            </div>
        )
    }
}