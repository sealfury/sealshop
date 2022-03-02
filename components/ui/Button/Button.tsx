import s from './Button.module.css'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode | ReactNode[]
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className={s.root} type='button'>
      {children}
    </button>
  )
}

export default Button
