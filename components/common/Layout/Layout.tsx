import s from './Layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={s.root}>
      <main className='fit'>{children}</main>
    </div>
  )
}

export default Layout
