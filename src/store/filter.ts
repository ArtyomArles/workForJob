import {createSlice} from '@reduxjs/toolkit'
import {filter} from '../types'

const filterSlice = createSlice({
  name: 'filtres',
  initialState: {
    selectedCountry: '',
    filterName: ''
  },
  reducers: {
    setSelectedCountry(state: filter, action: {payload: string}) {
      state.selectedCountry = action.payload
    },
    setFilterName(state: filter, action: { payload: string }) {
      state.filterName = action.payload
    }
  }
})

export const {
  setSelectedCountry,
  setFilterName
} = filterSlice.actions
export default filterSlice.reducer