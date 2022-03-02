import s from './Button.module.css'
import { ButtonHTMLAttributes, ReactNode, FC } from 'react'
import classNames from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[]
}

const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button className={classNames(s.root, className)} type='button' {...rest}>
      {children}
    </button>
  )
}

export default Button
