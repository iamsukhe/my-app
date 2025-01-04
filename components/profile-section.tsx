import Image from 'next/image'
import { SocialIcons } from './social-icons'
import { ResumeLink } from './resume-link'

export function ProfileSection() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-32">
      <div>
        <div className="pb-4">
          <Image
            src="/profile.jpg"
            alt="Your Name"
            width={192}
            height={192}
            className="rounded-lg object-cover dark:brightness-110"
            priority
          />
        </div>
        <h1 className="text-4xl mt-2 font-bold text-gradient sm:text-5xl">
          Sukhvinder Singh
        </h1>
        <h2 className="text-2xl mt-1 text-back-800 dark:text-back-200">
          Pursuing Computer Science
          <br />
          <a
            href="https://www.essex.ac.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-gray-400 underline underline-offset-4 decoration-2"
          >
            @{' '} University of Essex
          </a>
        </h2>
        <p className="mt-2 mb-6 text-back-500 dark:text-back-300 max-w-xs">
          I love to code and learn new technology.
        </p>
        <ResumeLink />
        <SocialIcons />
      </div>
    </header>
  )
}

