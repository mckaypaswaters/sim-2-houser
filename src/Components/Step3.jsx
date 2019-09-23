import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Step3 extends Component {
    constructor(){
        super()
        this.state = {
            mortgage: 0,
            rent: 0
        }
    }
    createHouse() {
        axios.post('/api/house', this.state)
    }
    handleChangeMortgage(value) {
        this.setState({mortgage: value})
    }
    handleChangeRent(value) {
        this.setState({rent: value})
    }

    render(){
        return(
            <div className='light-box-parent'>
                <div className='light-box'>
                    <div className='wizard-parent'>
                        <h1>Add New Listing</h1>
                        <Link to='/'><button>Cancel</button></Link>
                        <div>Recommended Rent: {this.state.mortgage * 1.25}</div>
                        Monthly Mortgage Amount <input onChange={e => this.handleChangeMortgage(e.target.value)} value={this.state.mortgage} type="decimal"/>
                        Desired Monthly Rent<input onChange={e => this.handleChangeRent(e.target.value)} value={this.state.rent} type="decimal"/>
                        <nav onClick={() => this.props.history.push('/')}>
                            <button onClick={() => this.createHouse()}>Complete</button>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}
