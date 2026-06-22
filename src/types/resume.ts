export interface Experience {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  highlights: string[];
  skills?: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  items: {
    groupName?: string;
    skills: string[];
  }[];
}

export interface Project {
  id: string;
  name: string;
  startDate?: string;
  endDate?: string;
  description: string[];
  url?: string;
  skills?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    summary: string;
    phone: string;
    email: string;
    location: string;
    linkedin: string;
  };
  experience: Experience[];
  projects: Project[];
  education: Education[];
  skills: SkillCategory[];
}
