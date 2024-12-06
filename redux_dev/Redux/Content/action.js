import * as types from "./actionType"; // Import action type constants

// Action creator for adding content
export const addContent = (payload) => ({
  type: types.ADD_DATA, // Action type for adding data
  payload, // Payload containing the data to add
});

// Action creator for removing an item
export const removeItem = (payload) => ({
  type: types.REMOVE_DATA, // Action type for removing data
  payload, // Payload containing the identifier for the item to remove
});
