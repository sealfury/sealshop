import { createContext, useContext, useReducer } from 'react'

export interface StateModifiers {
  openSidebar: () => void
  closeSidebar: () => void
}

export interface StateValues {
  sidebarOpen: boolean
}

type UIState = StateValues & StateModifiers
type Action = { type: 'OPEN_SIDEBAR' | 'CLOSE_SIDEBAR' }

const stateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {},
}

const initialState = { sidebarOpen: false }

export const UIContext = createContext<UIState>({
  ...stateModifiers,
  ...initialState,
})

const uiReducer = (state: StateValues, action: Action) => {
  switch (action.type) {
    case 'OPEN_SIDEBAR': {
      return {
        ...state,
        sidebarOpen: true,
      }
    }
    case 'CLOSE_SIDEBAR': {
      return {
        ...state,
        sidebarOpen: false,
      }
    }
  }
}

export const UIContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState)

  const openSidebar = () => dispatch({ type: 'OPEN_SIDEBAR' })
  const closeSidebar = () => dispatch({ type: 'CLOSE_SIDEBAR' })

  const providerValue = {
    ...state,
    openSidebar,
    closeSidebar,
  }

  return (
    <UIContext.Provider value={providerValue}>{children}</UIContext.Provider>
  )
}

export const useUIContext = () => {
  const context = useContext(UIContext)
  return context
}
