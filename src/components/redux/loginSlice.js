import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    name: '',
    email:'',
    password: ''
  },
  reducers: {
    validation: (state, action) => {
      state.value += action.payload
    },
    save: (state) => {
        state.name = 'name changed'
    },
  },
})

export const { validation, save } = loginSlice.actions

export default loginSlice.reducer