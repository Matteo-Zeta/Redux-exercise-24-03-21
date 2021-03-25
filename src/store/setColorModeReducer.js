import {
  SET_DARK_MODE,
  SET_LIGHT_MODE
} from './constants'

const defaultSate = {
  darkMode: false,
  lightMode: false
}
function colorReducer (state = defaultSate, action) {
  switch (action.type) {
    case SET_DARK_MODE:
      return {
        darkMode: true,
        lightMode: false
      }
    case SET_LIGHT_MODE:
      return {
        darkMode: false,
        lightMode: true
      }
    default:
      return state
  }
}
export default colorReducer;