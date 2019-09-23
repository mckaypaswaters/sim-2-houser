import React, {Component} from 'react'
import House from './House'
import {Link} from 'react-router-dom'
import axios from 'axios'
import store from '../store'

export default class Dashboard extends Component {
    constructor(){
        super()
        const reduxState = store.getState()
        this.state = {
            houses: reduxState.houses
        }
        this.deleteHouse = this.deleteHouse.bind(this)
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
                id={item.id}
                name={item.name}
                address={item.address}
                city={item.city}
                state={item.state}
                zip={item.zip}
                img={item.img}
                mortgage={item.mortgage}
                rent={item.rent}
                deleteHouseFn={this.deleteHouse}
            />
            )
    }
    async deleteHouse(id) {
        axios.delete(`/api/house/${id}`)
        this.componentDidMount()
    }

    render(){
        return(
            <div className='light-box-parent'>
                <div className='light-box'>
                    <div className='dashboard-parent'>
                        <h1>Dashboard</h1>
                        <Link to='/wizard/step1'>
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