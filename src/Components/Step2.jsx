import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Step2 extends Component {
    constructor(){
        super()
        this.state = {
            img: ''
        }
    }
    handleChangeImg(value) {
        this.setState({img: value})
    }

    render(){
        return(
            <div className='light-box-parent'>
                <div className='light-box'>
                    <div className='wizard-parent'>
                        <h1>Add New Listing</h1>
                        <Link to='/'><button>Cancel</button></Link>
                        Image URL<input onChange={e => this.handleChangeImg(e.target.value)} value={this.state.img} type="text"/>
                        <Link to='/wizard/step1'>
                            <button>Previous Step</button>
                        </Link>
                        <Link to='/wizard/step3'>
                            <button>Next Step</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}