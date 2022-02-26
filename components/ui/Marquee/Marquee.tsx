import s from './Marquee.module.css'

interface MarqueeProps {
  children: React.ReactNode[]
}

const Marquee: React.FC<MarqueeProps> = ({ children }) => {
  return <div className='marquee'>{children}</div>
}

export default Marquee
