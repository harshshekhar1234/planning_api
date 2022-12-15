import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: { items: [] },
  reducers: {
    loadProduct(state, action) {
      state.items = action.payload.products;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice;
