import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchData: (state) => {
      
    }
  
  },
})

// Action creators are generated for each case reducer function
export const { fetchData } = counterSlice.actions

export default counterSlice.reducer