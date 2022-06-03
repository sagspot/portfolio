import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthModalType, AuthModalViewType } from '../../types/modals';

const initialState: AuthModalType = {
  open: false,
  view: 'signin',
};

const authModalSlice = createSlice({
  name: 'portfolioModal',
  initialState,
  reducers: {
    modalOpened: (
      state: AuthModalType,
      action: PayloadAction<AuthModalViewType>
    ) => {
      state.open = true;
      state.view = action.payload;
    },
    modalClosed: (state: AuthModalType) => {
      state.open = false;
    },
  },
});

export const { modalOpened, modalClosed } = authModalSlice.actions;
export default authModalSlice.reducer;
