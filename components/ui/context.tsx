import { createContext, useContext } from 'react'

export const UIContext = createContext<{ [key: string]: string }>({
  uiState: 'defaultState',
})

export const UIContextProvider: React.FC = ({ children }) => {
  return (
    <UIContext.Provider value={{ uiState: 'someState' }}>
      {children}
    </UIContext.Provider>
  )
}

export const useUIContext = () => {
  const context = useContext(UIContext)
  return context
}