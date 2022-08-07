
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface NoteState{
    message: string
    color: string
}

const initialState: NoteState = {
  message: '',
  color: 'black'
}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    show: (state, action: PayloadAction<NoteState>) => {
      state.message = action.payload.message
      state.color = action.payload.color
    }
  }
})

export const { show } = noteSlice.actions
export default noteSlice.reducer
