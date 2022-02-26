import s from './Hero.module.css'
import Link from 'next/link'

interface HeroProps {
  banner: string
  description: string
}

const Hero: React.FC<HeroProps> = ({ banner, description }) => {
  return (
    <div className='bg-black'>
      <div className={s.root}>
        <h2 className={s.banner}>{banner}</h2>
        <div>
          <p className={s.description}>{description}</p>
          <Link href='/'>
            <a className={s.link}>Get back home</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
