import AboutDesktop from '@/components/about/AboutDesktop'
import AboutMobile from '@/components/about/AboutMobile'

export default function AboutPage() {
  return (
    <>
      <div className="desktop-only">
        <AboutDesktop />
      </div>
      <div className="mobile-only">
        <AboutMobile />
      </div>
    </>
  )
}
