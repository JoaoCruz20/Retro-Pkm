import { createSlice } from '@reduxjs/toolkit'

export const musicSlice = createSlice({
  name: 'music',
  initialState: {
    currentMusic: 'Something',
    play: false,
  },
  reducers: {
    play: (state) => {
      state.play ? state.play = false : state.play = true
    },
    next: (state) => {
        state.currentMusic = 'name changed'
    },
  },
})

export const { play, next } = musicSlice.actions

export default musicSlice.reducer