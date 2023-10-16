import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items += [...state.items, action.payload];
    },
    removeToBasket: (state) => {
      const index = state.items.findIndex((item) => item.id === id);

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product (id: ${id})`);
      }

      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeToBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

const newLocal = (state, id) =>
  state.basket.items.filter((item) => item.id === id);
export const selectBasketItemsWithId = newLocal;

export default basketSlice.reducer;
