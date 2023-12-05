import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    flashCards: [{
        id:1,text:"asdasd"
    }],
}

const flashCards = createSlice({
    name: 'flashCards',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.flashCards.push({
                id: (Math.floor(Math.random() * 90000) + 10000),
                text: action.payload[0]
            });
        },
    }
});

export const { addItem } = flashCards.actions
export default flashCards.reducer;