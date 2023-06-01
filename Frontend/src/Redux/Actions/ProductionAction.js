import axios from 'axios'
import { PRODUCTION_LIST_FAIL, PRODUCTION_LIST_REQUEST, PRODUCTION_LIST_SUCCESS } from "../Constants/ProductionConstance"
export const  listProduction=()=>async(dispatch)=>{
    try {
       dispatch({type:PRODUCTION_LIST_REQUEST})
       const {data}= await  axios.get('/api/productions')
       dispatch({TYPE:PRODUCTION_LIST_SUCCESS,payload: data})


    } catch (error) {
        dispatch({
            type:PRODUCTION_LIST_FAIL,
            payload:error.response && error.response.data.messgae ? error.data.message
            : error.messgae,
        })
        
    }

}