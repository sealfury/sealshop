import { createContext, useContext, useState } from 'react'

export const UIContext = createContext<{ [key: string]: any }>({
  uiState: 'defaultState',
})

export const UIContextProvider: React.FC = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const uiState = { sidebarOpen, setSidebarOpen }

  return <UIContext.Provider value={uiState}>{children}</UIContext.Provider>
}

export const useUIContext = () => {
  const context = useContext(UIContext)
  return context
}
