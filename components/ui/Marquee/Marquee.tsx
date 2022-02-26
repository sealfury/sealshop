import s from './Marquee.module.css'
import Ticker from 'react-ticker'
import classNames from 'classnames'

export type MarqueeVariant = 'primary' | 'secondary'

interface MarqueeProps {
  children: React.ReactNode[]
  variant?: MarqueeVariant
}

const Marquee: React.FC<MarqueeProps> = ({ children, variant = 'primary' }) => {
  const rootClass = classNames(s.root, {
    [s.secondary]: variant === 'secondary',
  })

  return (
    <div className={rootClass}>
      <Ticker offset={80}>
        {() => <div className={s.marqueeWrapper}>{children}</div>}
      </Ticker>
    </div>
  )
}

export default Marquee
