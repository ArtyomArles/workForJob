import {createSlice} from '@reduxjs/toolkit'
import {modalState, university} from '../types'

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    open: false,
    university: {
      domains: [],
      web_pages: [],
      alpha_two_code: '',
      country: '',
      name: ''
    }
  },
  reducers: {
    setOpenModal(state: modalState) {
      state.open = true
    },
    setCloseModal(state: modalState) {
      state.open = false
      state.university = {
        domains: [],
        web_pages: [],
        alpha_two_code: '',
        country: '',
        name: ''}
    },
    setUniversityOnModal(state: modalState, action: {payload: university}) {
      state.university = action.payload
    }
  }
})

export const {
  setOpenModal,
  setCloseModal,
  setUniversityOnModal
} = modalSlice.actions
export default modalSlice.reducer