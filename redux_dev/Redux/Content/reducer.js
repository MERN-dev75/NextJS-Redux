import * as types from "./actionType"

const initialState = {
    data: []
}

export function updateContent(state = initialState, action) {
    switch (action.type) {
        case types.ADD_DATA: {
                return {
                    ...state,
                    data: [...state.data, action.payload]
                }
            }

        case types.REMOVE_DATA: {
                return {
                    ...state,
                    data: action.payload
                }
            }

        default:
            return state
    }
}