import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: ['Fazer café', 'Estudar Redux'],

    reducers: {},
})

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
})