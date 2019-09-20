import React, {Component} from 'react'

export default class House extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div className='testing'>
                <div>
                    <button className='x-button'>X</button>
                </div>
                <p>Property Name: {this.props.name}</p>
                <p>Address: {this.props.address}</p>
                <p>City: {this.props.city}</p>
                <p>State: {this.props.state}</p>
                <p>Zip: {this.props.zip}</p>
            </div>
        )
    }
}