import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserTypes } from '../../../types/loginTypes';
import { GlobalModalTypes } from '../../../components/modalFutCards/GlobalModal';

interface GlobalStore{
    modal: GlobalModalTypes;
}

const initialState: GlobalStore = {
    modal: {
        visible: false,
        text: '',
        title: ''
    },
};

export const globalSlice = createSlice({
  name: 'globalReducer',
  initialState,
  reducers: {
    setModalAction: (state, action: PayloadAction<GlobalModalTypes>) => {
      state.modal = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setModalAction } = globalSlice.actions

export default globalSlice.reducer