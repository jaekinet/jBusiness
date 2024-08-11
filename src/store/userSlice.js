import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "wichara",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.value = 'wichara login'
    },
    logout: (state) => {
      state.value = 'wichara logout'
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, incrementByAmount } = userSlice.actions

export default userSlice.reducer