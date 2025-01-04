import { Github, Linkedin, Mail} from 'lucide-react'

interface SocialIconProps {
  href: string
  icon: typeof Github
  label: string
  className?: string
}

function SocialIcon({ href, icon: Icon, label, className }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:animate-pulse h-10 w-10 flex flex-shrink-0 items-center justify-center rounded-lg [&_svg]:transition-colors ${className}`}
      title={label}
      aria-label={`${label} (opens in a new tab)`}
    >
      <span className="sr-only">{label}</span>
      <Icon className="h-4 w-4" />
    </a>
  )
}

export function SocialIcons() {
  return (
    <ul className="mt-10 inline-flex gap-3">
      <li>
        <SocialIcon
          href="https://github.com/iamsukhe"
          icon={Github}
          label="GitHub"
          className="bg-[#24292f]/10 text-[#24292f] dark:bg-[#ffffff]/10 dark:text-[#ffffff]"
        />
      </li>
      <li>
        <SocialIcon
          href="https://www.linkedin.com/in/sukhvinder-singh-4029a8190/"
          icon={Linkedin}
          label="LinkedIn"
          className="bg-[#0a66c2]/10 text-[#0a66c2] dark:bg-[#ffffff]/10 dark:text-[#ffffff]"
        />
      </li>
      <li>
        <SocialIcon
          href="sukhe353@gmail.com"
          icon={Mail}
          label="Email"
          className="bg-[#ea4335]/10 text-[#ea4335] dark:bg-[#ffffff]/10 dark:text-[#ffffff]"
        />
      </li>
    </ul>
  )
}

