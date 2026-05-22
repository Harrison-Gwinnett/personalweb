import HomeDesktop from '@/components/home/HomeDesktop'
import HomeMobile from '@/components/home/HomeMobile'

export default function HomePage() {
  return (
    <>
      <div className="desktop-only">
        <HomeDesktop />
      </div>
      <div className="mobile-only">
        <HomeMobile />
      </div>
    </>
  )
}
