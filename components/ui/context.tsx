import { createContext, useContext } from 'react'

export interface StateModifiers {
  openSidebar: () => void
  closeSidebar: () => void
}

export interface StateValues {
  sidebarOpen: boolean
}

type UIState = StateValues & StateModifiers

const stateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {},
}

const initialState = { sidebarOpen: false }

export const UIContext = createContext<UIState>({
  ...stateModifiers,
  ...initialState,
})

export const UIContextProvider: React.FC = ({ children }) => {
  const openSidebar = () => alert('Open Sidebar')
  const closeSidebar = () => alert('Close Sidebar')

  const providerValue = {
    openSidebar,
    closeSidebar,
    sidebarOpen: false,
  }

  return (
    <UIContext.Provider value={providerValue}>{children}</UIContext.Provider>
  )
}

export const useUIContext = () => {
  const context = useContext(UIContext)
  return context
}
