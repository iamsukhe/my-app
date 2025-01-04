import { ResumeModal } from './resume-modal'

export function ResumeLink() {
  return (
    <div className="group relative mt-4">
      <ResumeModal />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="url(#arrow_right_svg__a)"
        strokeWidth="1.5"
        className="w-4 h-4 ml-1.5 inline-block shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none group-hover:scale-105"
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient
            id="arrow_right_svg__a"
            x1="0%"
            x2="100%"
            y1="0%"
            y2="0%"
          >
            <stop offset="0%" style={{ stopColor: '#808080', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#808080', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    </div>
  )
}

