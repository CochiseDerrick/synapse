import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface GlobalState {
    searchTerms: string[]
}

const initialState: GlobalState = {
    searchTerms: [],
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setSearchTerm: (state, action: PayloadAction<string[]>) => {

            state.searchTerms = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setSearchTerm } = globalSlice.actions

export default globalSlice.reducer