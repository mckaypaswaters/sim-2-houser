import {createStore} from 'redux'

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0,
    houses: []
}

// ACTION CONSTANTS
export const HANDLE_CHANGE_NAME = 'HANDLE_CHANGE_NAME'
export const HANDLE_CHANGE_ADDRESS = 'HANDLE_CHANGE_ADDRESS'
export const HANDLE_CHANGE_CITY = 'HANDLE_CHANGE_CITY'
export const HANDLE_CHANGE_STATE = 'HANDLE_CHANGE_STATE'
export const HANDLE_CHANGE_ZIP = 'HANDLE_CHANGE_ZIP'
export const HANDLE_CHANGE_IMG = 'HANDLE_CHANGE_IMG'
export const HANDLE_CHANGE_MORTGAGE = 'HANDLE_CHANGE_MORTGAGE'
export const HANDLE_CHANGE_RENT = 'HANDLE_CHANGE_RENT'
export const STEP_1 = 'STEP_1'
export const STEP_2 = 'STEP_2'
export const STEP_3 = 'STEP_3'

// REDUCER FUNCTION
function reducer(state = initialState, action){
    switch(action.type){
        case HANDLE_CHANGE_NAME:
            return {...state, name: action.payload}
        case HANDLE_CHANGE_ADDRESS:
            return {...state, address: action.payload}
        case HANDLE_CHANGE_CITY:
            return {...state, city: action.payload}
        case HANDLE_CHANGE_STATE:
            return {...state, state: action.payload}
        case HANDLE_CHANGE_ZIP:
            return {...state, zip: action.payload}
        case HANDLE_CHANGE_IMG:
            return {...state, img: action.payload}
        case HANDLE_CHANGE_MORTGAGE:
            return {...state, mortgage: action.payload}
        case HANDLE_CHANGE_RENT:
            return {...state, rent: action.payload}
        case STEP_1:
            return {...state, houses: [...state.houses, 
            state.name,
            state.address,
            state.city,
            state.state,
            state.zip,
            ]}
        case STEP_2:
            return {...state, houses: [...state.houses,
            state.img
            ]}
        case STEP_3:
            return {...state, houses: [...state.houses,
            state.mortgage,
            state.rent
            ]}
        default:
            return state
    }
}


// CREATE STORE
export default createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )