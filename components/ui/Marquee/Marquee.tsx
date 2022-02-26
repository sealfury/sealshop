import s from './Marquee.module.css'

interface MarqueeProps {
  children: React.ReactNode[]
}

const Marquee: React.FC<MarqueeProps> = ({ children }) => {
  return (
    <div className={s.root}>
      <div className={s.marqueeWrapper}>{children}</div>
    </div>
  )
}

export default Marquee
