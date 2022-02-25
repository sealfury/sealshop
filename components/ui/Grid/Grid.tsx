import { ReactNode } from 'react'

const Grid: React.FC<ReactNode> = ({ children }) => {
  return <div className='root-grid'>{children}</div>
}

export default Grid
