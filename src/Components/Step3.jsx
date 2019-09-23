import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import store, {HANDLE_CHANGE_MORTGAGE, HANDLE_CHANGE_RENT, STEP_3} from '../store'

export default class Step3 extends Component {
    constructor(){
        super()
        const reduxState = store.getState()
        this.state = {
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        }
    }
    componentDidMount(){
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip,
            img: reduxState.img,
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
            })
        })
    }
    async createHouse() {
        await store.dispatch({
            type: STEP_3
        })
        axios.post('/api/house', this.state)
    }
    handleChangeMortgage(e) {
        store.dispatch({
            type: HANDLE_CHANGE_MORTGAGE,
            payload: e.target.value
        })
    }
    handleChangeRent(e) {
        store.dispatch({
            type: HANDLE_CHANGE_RENT,
            payload: e.target.value
        })
    }
    handleSubmit() {
        
    }

    render(){
        return(
            <div className='light-box-parent'>
                <div className='light-box'>
                    <div className='wizard-parent'>
                        <h1>Add New Listing</h1>
                        <Link to='/'><button>Cancel</button></Link>
                        <div>Recommended Rent: {this.state.mortgage * 1.25}</div>
                        Monthly Mortgage Amount <input onChange={e => this.handleChangeMortgage(e)} value={this.state.mortgage} type="decimal"/>
                        Desired Monthly Rent<input onChange={e => this.handleChangeRent(e)} value={this.state.rent} type="decimal"/>
                        <nav onClick={() => this.props.history.push('/')}>
                            <button onClick={() => this.createHouse()}>Complete</button>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}
