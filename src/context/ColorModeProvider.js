import { createContext, useReducer } from 'react';
import colorModeReducer from './colorModeReducer'
import {
  SET_DARK_MODE,
  SET_LIGHT_MODE
} from './constants'

const defaultSate = {
  darkMode: false,
  lightMode: false
}
export const ColorModeContext = createContext(defaultSate)

export default function ColorModeProvider({ children }) {
  const [state, dispatch] = useReducer(colorModeReducer, defaultSate)
  const setDarkMode = () => {
    dispatch({ type: SET_DARK_MODE })
  }
  const setLightMode = () => {
    dispatch({ type: SET_LIGHT_MODE })
  }
  const value = { state, setDarkMode, setLightMode }
  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  )
}