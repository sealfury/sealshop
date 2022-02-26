import s from './Grid.module.css'
import classNames from 'classnames'

interface GridProps {
  children: React.ReactNode[]
  layout?: 'A' | 'B'
}

const Grid: React.FC<GridProps> = ({ children, layout }) => {
  const rootCN = classNames(s.root, {
    [s.layoutA]: layout === 'A',
    [s.layoutB]: layout === 'B',
  })

  return <div className={rootCN}>{children}</div>
}

export default Grid
