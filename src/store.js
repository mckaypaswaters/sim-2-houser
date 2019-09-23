import {createStore} from 'redux'

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0
}

// ACTION CONSTANTS
export const STEP_1 = 'STEP_1'
export const STEP_2 = 'STEP_2'
export const STEP_3 = 'STEP_3'

// REDUCER FUNCTION
function reducer(state = initialState, action){
    switch(action.type){}
}


// CREATE STORE
export default createStore(reducer)