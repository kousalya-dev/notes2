// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: 'Hanu S Kumar',
  title: 'Full-Stack Developer',
  location: 'Chennai, India',
  email: 'hanuskumar121@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hanuskumar',
  resume: '/Hanu_S_Kumar_Resume.pdf',
  tagline: 'Built for speed. Engineered to scale.',
  summary:
    'Full-stack developer with 4 years in production, building scalable web apps with React.js, Node.js and AWS. Promoted to Module Lead within a year for ownership and consistent delivery.',
}

// f = needle position (0–1) on the hero gauge
export const readouts = [
  { big: '−75%', label: 'USER INPUT TIME', f: 0.75 },
  { big: '−60%', label: 'DATA FETCH TIME', f: 0.6 },
  { big: '<1 YR', label: 'TO MODULE LEAD', f: 0.22 },
  { big: '4 YRS', label: 'IN PRODUCTION', f: 0.8 },
]

export const lights = ['REACT', 'NODE', 'AWS', 'RBAC', 'MONGODB']

export const manifesto =
  'I design end-to-end modules that scale, lock them down with role-based access control, and tune them until the numbers move. Clean architecture, efficient workflows, and a team that can rely on me.'

export const route = ['Generative AI', 'LLM fundamentals', 'Prompt engineering', 'AI-assisted app development']

export const impact = [
  { value: 75, prefix: '−', suffix: '%', f: 0.75, label: 'Less user input time', note: 'Shipped a bulk upload system that replaced repetitive manual entry.' },
  { value: 60, prefix: '−', suffix: '%', f: 0.6, label: 'Faster data fetch', note: 'Implemented bulk get to cut get time across the platform.' },
  { value: 1, prefix: '<', suffix: ' yr', f: 0.2, label: 'To Module Lead', note: 'Promoted for strong ownership and consistent delivery. (scale: 5 yrs)' },
  { value: 4, suffix: ' yrs', f: 0.8, label: 'In production', note: 'Multiple core modules used across the platform. (scale: 5 yrs)' },
]

export const experience = [
  {
    role: 'Full Stack Developer — Module Lead',
    company: 'Unifo Private Ltd',
    place: 'Chennai, India',
    period: 'Aug 2022 — Present',
    points: [
      'Led end-to-end development of core modules, improving scalability and reducing manual processing effort.',
      'Built Super Admin functionality that enables cross-customer operations and lifts administrative efficiency.',
      'Implemented Role-Based Access Control (RBAC) to strengthen security and access management.',
      'Implemented bulk get, reducing get time by 60%.',
      'Reduced user input time by 75% with a bulk upload system.',
    ],
    tags: ['React.js', 'Node.js', 'MongoDB', 'AWS', 'RBAC'],
  },
  {
    role: 'Internship Trainee',
    company: 'Sellogs Metamediary Solutions',
    place: 'Kochi, India',
    period: 'Dec 2021 — Jun 2022',
    points: [
      'Built foundational full-stack skills with PHP, SQL, JavaScript and Laravel.',
      'Developed applications and practised version control with Git and GitHub.',
    ],
    tags: ['PHP', 'Laravel', 'SQL', 'JavaScript', 'Git'],
  },
]

export const skills = [
  { part: 'ENGINE', title: 'Languages', items: ['JavaScript', 'TypeScript'] },
  { part: 'DRIVETRAIN', title: 'Stack', items: ['React.js', 'Node.js', 'HTML / CSS', 'REST APIs'] },
  { part: 'CHASSIS', title: 'Databases', items: ['MongoDB', 'MySQL', 'DynamoDB', 'ElasticSearch'] },
  { part: 'TURBO', title: 'AWS', items: ['S3', 'DynamoDB', 'CloudWatch', 'ECS', 'ECR', 'Cognito', 'Secrets Manager'] },
  { part: 'NAVIGATION', title: 'AI & Tools', items: ['LLM Fundamentals', 'Prompt Engineering', 'Claude', 'GitHub Copilot', 'Git', 'GitHub', 'Postman'] },
  { part: 'CREW', title: 'Soft skills', items: ['Critical thinking', 'Communication', 'Team management', 'Teamwork', 'Leadership'] },
]

export const education = { school: 'Kerala University', degree: 'BSc Computer Science', period: '2017 — 2020' }
