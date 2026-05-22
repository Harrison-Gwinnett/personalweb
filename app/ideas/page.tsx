import IdeasDesktop from '@/components/ideas/IdeasDesktop'
import IdeasMobile from '@/components/ideas/IdeasMobile'

export default function IdeasPage() {
  return (
    <>
      <div className="desktop-only">
        <IdeasDesktop />
      </div>
      <div className="mobile-only">
        <IdeasMobile />
      </div>
    </>
  )
}
