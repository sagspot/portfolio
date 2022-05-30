import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

const portfolioModalSlice = createSlice({
  name: 'portfolioModal',
  initialState,
  reducers: {
    modalToggled: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { modalToggled } = portfolioModalSlice.actions;
export default portfolioModalSlice.reducer;
