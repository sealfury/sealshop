import s from './Marquee.module.css'
import Ticker from 'react-ticker'

interface MarqueeProps {
  children: React.ReactNode[]
}

const Marquee: React.FC<MarqueeProps> = ({ children }) => {
  return (
    <div className={s.root}>
      <Ticker offset={80}>
        {() => <div className={s.marqueeWrapper}>{children}</div>}
      </Ticker>
    </div>
  )
}

export default Marquee
