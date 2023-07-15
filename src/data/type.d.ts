interface Freelancer {
  id: number;
  name: string;
  email: string;
  imageURL: string;
  level: string;
  about: string;
  linkedinURL: string;
  githubURL: string;
  languages: string[];
  skills: string[];
  experiences: Experience[];
  academics: Academic[];
}

interface Experience {
  company: string;
  place: string;
  time: string;
  jobs: Job[];
}

interface Job {
  level: string;
  from: string;
  to: string;
  summary: string;
}

interface Academic {
  institution: string;
  degree: string;
  course: string;
  from: string;
  to: string;
}
