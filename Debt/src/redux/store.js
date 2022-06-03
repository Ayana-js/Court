import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'


const store = configureStore({reducer: {
    reducer: reducer
}})

window.__store__ = store
 
export default store