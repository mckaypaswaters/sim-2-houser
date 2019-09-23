import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import store, {HANDLE_CHANGE_IMG, STEP_2} from '../store'

export default class Step2 extends Component {
    constructor(){
        super()
        const reduxState = store.getState()
        this.state = {
            img: reduxState.img
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
            img: reduxState.img
            })
        })
    }
    handleChangeImg(e) {
        store.dispatch({
            type: HANDLE_CHANGE_IMG,
            payload: e.target.value
        })
    }
    handleSubmit() {
        store.dispatch({
            type: STEP_2
        })
    }

    render(){
        return(
            <div className='light-box-parent'>
                <div className='light-box'>
                    <div className='wizard-parent'>
                        <h1>Add New Listing</h1>
                        <Link to='/'><button>Cancel</button></Link>
                        Image URL<input onChange={e => this.handleChangeImg(e)} value={this.state.img} type="text"/>
                        <Link to='/wizard/step1'>
                            <button>Previous Step</button>
                        </Link>
                        <Link to='/wizard/step3'>
                            <button onClick={() => this.handleSubmit()}>Next Step</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}