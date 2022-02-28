import { ReactNode, ComponentType, HTMLAttributes, FC } from 'react'

interface ContainerProps {
  /* Accept one or multiple children */
  children: ReactNode | ReactNode[]
  element?: ComponentType<HTMLAttributes<HTMLElement>>
}

const Container: FC<ContainerProps> = ({
  children,
  element: Element = 'div',
}) => {
  return <Element className='px-6 mx-auto max-w-8xl'>{children}</Element>
}

export default Container
