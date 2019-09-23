import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import store, {HANDLE_CHANGE_NAME,
    HANDLE_CHANGE_ADDRESS,
    HANDLE_CHANGE_CITY, 
    HANDLE_CHANGE_STATE, 
    HANDLE_CHANGE_ZIP, 
    STEP_1} from '../store'

export default class Step1 extends Component {
    constructor(){
        super()
        const reduxState = store.getState()

        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
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
            zip: reduxState.zip
            })
        })
    }
    handleChangeName(e) {
        store.dispatch({
            type: HANDLE_CHANGE_NAME,
            payload: e.target.value
        })
    }
    handleChangeAddress(e) {
        store.dispatch({
            type: HANDLE_CHANGE_ADDRESS,
            payload: e.target.value
        })
    }
    handleChangeCity(e) {
        store.dispatch({
            type: HANDLE_CHANGE_CITY,
            payload: e.target.value
        })
    }
    handleChangeState(e) {
        store.dispatch({
            type: HANDLE_CHANGE_STATE,
            payload: e.target.value
        })
    }
    handleChangeZip(e) {
        store.dispatch({
            type: HANDLE_CHANGE_ZIP,
            payload: e.target.value
        })
    }
    handleSubmit() {
        store.dispatch({
            type: STEP_1
        })
    }
    cancelButton() {
        const reduxState = store.getState()
        this.setState({
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        })
    }

    // handleChangeName(value) {
    //     this.setState({name: value})
    // }
    // handleChangeAddress(value) {
    //     this.setState({address: value})
    // }
    // handleChangeCity(value) {
    //     this.setState({city: value})
    // }
    // handleChangeState(value) {
    //     this.setState({state: value})
    // }
    // handleChangeZip(value) {
    //     this.setState({zip: value})
    // }

    render(){
        return(
            <div className='light-box-parent'>
                <div className='light-box'>
                    <div className='wizard-parent'>
                        <h1>Add New Listing</h1>
                        <nav onClick={() => this.props.history.push('/')}>
                            <button onClick={() => this.cancelButton()}>Cancel</button>
                        </nav>
                        Property Name<input onChange={e => this.handleChangeName(e)} value={this.state.name} type="text"/>
                        Address <input onChange={e => this.handleChangeAddress(e)} value={this.state.address} type="text"/>
                        <div className='city-state-zip'>
                            City <input onChange={e => this.handleChangeCity(e)} value={this.state.city} type="text"/>
                            State <input onChange={e => this.handleChangeState(e)} value={this.state.state} type="text"/>
                            Zip <input onChange={e => this.handleChangeZip(e)} value={this.state.zip} type="number"/>
                        </div>
                        <nav onClick={() => this.props.history.push('/wizard/step2')}>
                            <button onClick={() => this.handleSubmit()}>Next Step</button>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}