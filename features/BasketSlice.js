import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
     //keep whats in state(...state)
      state.items =[...state, action.payload]
    },
    removeFromBasket: (state) => {
      state.value -= 1
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket} = basketSlice.actions

export const selectBasketItems = (state) => state.basket.items;

export default basketSlice.reducer