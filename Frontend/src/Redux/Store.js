import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { productionListReducer } from './Reducers/ProductionReducer'
const rootReducer = combineReducers({
    productionList: productionListReducer
})
const initialState={}
 export const store= createStore(rootReducer, initialState, applyMiddleware(thunk))