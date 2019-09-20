import React, {Component} from 'react'
import House from './House'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            houses: []
        }
    }

    async componentDidMount() {
        const houses = await axios.get('/api/houses', this.state.houses)
        this.setState({houses: houses.data})
    }
    renderHouses(){
        const {houses} = this.state
        return houses.map((item) =>
            <House
                key={item.id}
                name={item.name}
                address={item.address}
                city={item.city}
                state={item.state}
                zip={item.zip}
            />
            )
    }

    render(){
        return(
            <div className='light-box-parent'>
                <div className='light-box'>
                    <div className='dashboard-parent'>
                        <h1>Dashboard</h1>
                        <Link to='/wizard'>
                            <button className='new-property-button'>Add New Property</button>
                        </Link>
                        <hr className='line'/>
                        <div className='dashboard-houses'>
                            <h4>Property Listings</h4>
                            {this.renderHouses()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}