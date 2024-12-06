import * as types from "./actionType" ;

export const addContent = (payload) => ({
    type: types.ADD_DATA,
    payload: payload
}) 


export const removeItem = (payload) => ({
    type: types.REMOVE_DATA,
    payload: payload
}) 