import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserTypes } from '../../../types/loginTypes';

interface UserStore{
    user: String;
}

const initialState: UserStore = {
    user: undefined,
}

export const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserAction: (state, action) => {
      state.user = action.payload
    },
  },
})

export const reducerUser = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

// Action creators are generated for each case reducer function
export const { setUserAction } = userSlice.actions

export default userSlice.reducer