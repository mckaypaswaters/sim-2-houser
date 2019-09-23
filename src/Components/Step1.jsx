import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Step1 extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
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
                        <Link to='/wizard/step2'>
                            <button>Next Step</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}