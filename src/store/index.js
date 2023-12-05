import { configureStore } from '@reduxjs/toolkit'
import flashCards from './flashCards'

const store = configureStore({
    reducer: {
        flashCards
    }
})

export default store;