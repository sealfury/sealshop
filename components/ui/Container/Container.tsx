interface ContainerProps {
  /* Accept one or multiple children */
  children: React.ReactNode | React.ReactNode[]
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className='px-6 mx-auto max-w-8xl'>{children}</div>
}

export default Container
