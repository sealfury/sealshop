import s from './Grid.module.css'
import { ReactNode } from 'react'

const Grid: React.FC<ReactNode> = ({ children }) => {
  return <div className={s.root}>{children}</div>
}

export default Grid
