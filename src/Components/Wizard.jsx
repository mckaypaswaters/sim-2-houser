import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }
    createHouse() {
        axios.post('/api/house', this.state)
    }

    handleChangeName(value) {
        this.setState({name: value})
    }
    handleChangeAddress(value) {
        this.setState({address: value})
    }
    handleChangeCity(value) {
        this.setState({city: value})
    }
    handleChangeState(value) {
        this.setState({state: value})
    }
    handleChangeZip(value) {
        this.setState({zip: value})
    }

    render(){
        return(
        <div className='light-box-parent'>
            <div className='light-box'>
                <div className='wizard-parent'>
                    <h1>Add New Listing</h1>
                    <Link to='/'><button>Cancel</button></Link>
                    Property Name<input onChange={e => this.handleChangeName(e.target.value)} value={this.state.name} type="text"/>
                    Address <input onChange={e => this.handleChangeAddress(e.target.value)} value={this.state.address} type="text"/>
                    <div className='city-state-zip'>
                        City <input onChange={e => this.handleChangeCity(e.target.value)} value={this.state.city} type="text"/>
                        State <input onChange={e => this.handleChangeState(e.target.value)} value={this.state.state} type="text"/>
                        Zip <input onChange={e => this.handleChangeZip(e.target.value)} value={this.state.zip} type="number"/>
                    </div>
                    <div onClick={() => this.props.history.push('/')}>
                        <button onClick={() => this.createHouse()}>Complete</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

// {() => this.createHouse()}
// {() => this.props.history.go('/')}