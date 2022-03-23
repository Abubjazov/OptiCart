import { createStore } from 'redux'
import { rootReducer } from './reducers'

import { composeWithDevTools } from 'redux-devtools-extension'

const preloadedState = {}

export const store = createStore(
	rootReducer,
	preloadedState,
	composeWithDevTools()
)
