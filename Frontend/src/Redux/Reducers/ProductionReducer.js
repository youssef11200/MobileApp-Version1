import { PRODUCTION_LIST_FAIL, PRODUCTION_LIST_REQUEST, PRODUCTION_LIST_SUCCESS } from "../Constants/ProductionConstance";

export const productionListReducer = (state={production:[]}, action)=>{
    switch (action.payload) {
        
        case PRODUCTION_LIST_REQUEST:
            return {loading:true, production:[]}

           case PRODUCTION_LIST_SUCCESS:
            return {loading:false, products: action.payload}

            case PRODUCTION_LIST_FAIL:
                return {loading:false, error: action.payload}
    
        default:
        return state;
    }
}