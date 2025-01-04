import { ProfileSection } from '@/components/profile-section'
import { ContentSection } from '@/components/content-section'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Page() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl py-12 px-6 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="flex justify-end mb-4 pt-6 lg:pt-4 lg:top-24 relative -mt-20 top-14 right-1">
        <ThemeToggle />
      </div>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <ProfileSection />
        <ContentSection />
      </div>
    </div>
  )
}

