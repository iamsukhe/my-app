interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  companyUrl: string;
  description: string[];
  technologies: string[];
}

interface EducationItem {
  date: string;
  degree: string;
  institution: string;
  institutionUrl: string;
  description?: string;
}

interface WritingItem {
  title: string;
  writingUrl: string;
  date: string;
  readTime: string;
  thumbnail: string;
}

const experiences: ExperienceItem[] = [
  {
    date: "May 2022 – August 2024",
    title: "Software Development Engineer III",
    company: "Suraasa",
    companyUrl: "https://suraasa.com",
    description: [
      "Designed and developed highly scalable backend solutions for the National Teaching Olympiad and accommodated 5,000 plus users.",
      "Implemented Redis DB to accelerate API response times and manage concurrent users effectively.",
      "Collaborated closely with UI/UX designers and front-end developers to ensure consistency and functionality across the entire application.",
      "Utilised Node.js and Python to create robust and efficient APIs, facilitating seamless data exchange between frontend and backend components.",
      "Developed a credential management system to store and manage users' certificates, and implemented user enrollment system.",
      "Developed a centralised authentication and resource package for Suraasa, streamlining authentication and simplifying API calls from JSON data.",
    ],
    technologies: ["Node.js", "Python", "Redis", "API Development", "Authentication"],
  },
  {
    date: "April 2022 – May 2022",
    title: "Backend Intern",
    company: "Suraasa",
    companyUrl: "https://suraasa.com",
    description: [
      "Focused on Node.js and Python training, along with Adnonis.js framework.",
      "Gained understanding of Suraasa's system and completed a self-project for the organisation.",
      "Contributed to the Suraasa finance system, developing a transaction management system.",
      "Utilised Git for version control and effectively managed project workflow.",
    ],
    technologies: ["Node.js", "Python", "Adnonis.js", "Git"],
  },
  {
    date: "June 2021 – January 2022",
    title: "Web Development Intern",
    company: "Hybrowlabs Technologies",
    companyUrl: "https://hybrowlabs.com",
    description: [
      "Collaborated with the team to implement front-end components, ensuring cross-browser compatibility.",
      "Developed responsive web pages using HTML, CSS, and JavaScript, enhancing user experience and accessibility.",
      "Gained hands-on experience in debugging and troubleshooting UI/UX issues across various platforms.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
];

const educations: EducationItem[] = [
  {
    date: "July 2019 - May 2022",
    degree: "Bachelor of Science in Electronic Science",
    institution: "University of Delhi",
    institutionUrl: "https://www.du.ac.in/",
  },
  {
    date: "September 2024 – October 2025 (Expected)",
    degree: "Master of Science in Advanced Computer Science ",
    institution: "University of Essex",
    institutionUrl: "https://www.essex.ac.uk/",
  },
];

const writings: WritingItem[] = [
  {
    title: "How JavaScript Code is executed?",
    writingUrl: "https://medium.com/@sukhe353/how-javascript-code-is-executed-9aa754826852",
    date: "Jun 1, 2023",
    readTime: "5 min read",
    thumbnail: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*srBDNUvp-aUrL31QrSZ5lg.png",
  },
];

export function ContentSection() {
  return (
    <main className="pt-20 lg:pt-32 lg:pb-8 lg:w-1/2">
      <section className="text-back-950 dark:text-back-300">
        <p className="mb-4">
          Hi there! 👋 Hello and welcome! I'm a highly motivated and results-oriented Software Development Engineer with more than 2 years of experience in crafting robust backend solutions leveraging Node.js and Python. 
          Adept at collaborating within cross-functional teams to design, develop, and implement scalable and efficient applications. 
          Proficient in programming fundamentals and project management methodologies. 
          I am eager to contribute my expertise and passion for technology to a dynamic organization.
        </p>
        <p className="mb-4">
          Currently, I am expanding my skill set by learning frontend technologies, including React, Next.js, and Tailwind CSS
        </p>
      </section>

      <section className="text-back-600 dark:text-back-400 my-20">
        <h2 className="text-3xl font-semibold text-gradient mb-8">Experience</h2>
        <ol className="group/items">
          {experiences.map((experience, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-2 transition-all sm:grid-cols-8 sm:gap-8 gap-4 sm:hover:!opacity-100 sm:group-hover:opacity-50 md:hover:scale-105">
                <div className="absolute sm:block -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none sm:group-hover:drop-shadow-md sm:group-hover:bg-back-950/[.02] dark:sm:group-hover:bg-white/[.02]"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-back-500 dark:text-back-300 sm:col-span-2">
                  {experience.date}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-semibold leading-snug text-back-800 dark:text-back-300 group-hover:text-gradient">
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-baseline font-semibold leading-tight group"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      {experience.title} • {experience.company}
                    </a>
                  </h3>
                  {experience.description.map((desc, i) => (
                    <p key={i} className="mt-4 text-sm leading-normal text-back-800 dark:text-back-300">
                      {desc}
                    </p>
                  ))}
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {experience.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="mr-2 mt-2 px-2 py-1 font-medium leading-snug dark:text-gray-200 bg-no-repeat text-gray-900 rounded-lg text-xs bg-gradient-to-r from-gray-400/40 to-blue-400/40"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="text-back-600 dark:text-back-400 my-20">
        <h2 className="text-3xl font-semibold text-gradient mb-8">Education</h2>
        <ol className="group/items">
          {educations.map((education, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-2 transition-all sm:grid-cols-8 sm:gap-8 gap-4 sm:hover:!opacity-100 sm:group-hover:opacity-50 md:hover:scale-105">
                <div className="absolute sm:block -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none sm:group-hover:drop-shadow-md sm:group-hover:bg-back-950/[.02] dark:sm:group-hover:bg-white/[.02]"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-back-500 dark:text-back-300 sm:col-span-2">
                  {education.date}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-semibold leading-snug text-back-800 dark:text-back-300 group-hover:text-gradient">
                    <a
                      href={education.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-baseline font-semibold leading-tight group"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      {education.degree}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-back-800 dark:text-back-300">
                    {education.institution}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
      
      <section className="text-back-600 dark:text-back-400 my-20">
        <h2 className="text-3xl font-semibold text-gradient mb-8">Writing</h2>
        <ol className="group/items">
          {writings.map((writing, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-2 transition-all sm:grid-cols-8 sm:gap-8 gap-4 sm:hover:!opacity-100 sm:group-hover:opacity-50 md:hover:scale-105">
                <div className="absolute sm:block -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none sm:group-hover:drop-shadow-md sm:group-hover:bg-back-950/[.02] dark:sm:group-hover:bg-white/[.02]"></div>
                <div className="z-10 sm:col-span-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-1/3">
                      <img
                        src={writing.thumbnail}
                        alt={writing.title}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold leading-snug text-back-800 dark:text-back-300 group-hover:text-gradient">
                        <a
                          href={writing.writingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-baseline font-semibold leading-tight group"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          {writing.title}
                        </a>
                      </h3>
                      <p className="mt-2 text-sm text-back-500 dark:text-back-400">
                        {writing.date} • {writing.readTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

