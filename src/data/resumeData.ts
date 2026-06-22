import type { ResumeData } from "../types/resume";

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Dimitris Karamanis",
    title: "Software Engineer",
    summary:
      "5 years of experience primarily in backend development, curious about AI and its use-cases in software.",
    phone: "+45 50 23 12 26",
    email: "dimitris23bp@protonmail.com",
    location: "Copenhagen, Denmark",
    linkedin: "https://www.linkedin.com/in/dimitriskaramanis/",
  },
  experience: [
    {
      id: "pleo",
      role: "Platform Engineer",
      company: "Pleo",
      startDate: "04/2024",
      endDate: "Present",
      location: "Copenhagen, Denmark",
      highlights: [
        "Implemented a service for the creation of new microservices, reducing initial setup from days to 5 minutes, with an automatic deployment to all requested AWS clusters.",
        "Created custom AI agents for internal automation of work (investigation of Grafana alerts, initial investigation of new bug tickets).",
        "Created and enhanced the Github workflows for the CI of all the backend services in production.",
      ],
    },
    {
      id: "dt",
      role: "Software Engineer",
      company: "Deutsche Telekom",
      startDate: "10/2022",
      endDate: "03/2024",
      location: "Thessaloniki, Greece",
      highlights: [
        "Contributed to an international hub using the SAFe framework, utilizing technologies such as: Java (Spring Boot, Quarkus), Kotlin, React, Typescript, Kafka, REST APIs, OpenAPI, PostgreSQL, and Docker.",
        "Retired successfully a monolithic project through collaborative communication with other teams in the hub.",
        "Reduced import/export execution time by 80% using Spring Batch.",
      ],
    },
    {
      id: "accenture",
      role: "Software Engineer",
      company: "Accenture",
      startDate: "10/2021",
      endDate: "09/2022",
      location: "Thessaloniki, Greece",
      highlights: [
        "Developed an insurance marketplace as part of an agile team using: Java (Spring Boot), PostgreSQL, Kafka.",
        "Led the development of the reporting functionality. From a manual time-consuming process, to a fully automated one-button export with data from across 15+ insurance companies.",
      ],
    },
    {
      id: "army",
      role: "Software Engineer",
      company: "Greek Army (Mandatory Military Service)",
      startDate: "11/2020",
      endDate: "08/2021",
      location: "Greece",
      highlights: [
        "Developed a virtual reality interactive training system in Unity, that simulates and exceeds the actual training.",
        "Presented to stakeholders in different stages of the project.",
      ],
    },
  ],
  projects: [
    {
      id: "multiconvertor",
      name: "MultiConvertor",
      startDate: "04/2026",
      endDate: "Present",
      description: [
        "To demonstrate my practical GenAI skills, I tested myself in an unfamiliar stack. I acted as a Tech Lead and used LLMs to build a native iOS application. My backend experience allowed me to guide the AI's architecture, concurrency patterns, and local database design.",
      ],
    },
    {
      id: "anki-languages-cli",
      name: "Anki CLI translator",
      startDate: "2023",
      description: [
        "A command-line interface tool created in Rust. I wanted to practice Rust and needed this specific feature that did not exist before.",
      ],
      url: "https://github.com/dimitris23bp/anki_languages_cli",
    },
    {
      id: "parallel-traveling-salesman",
      name: "Parallel Traveling Salesman",
      startDate: "2020",
      description: [
        "My thesis for my bachelor's degree. Implemented and evaluated parallel algorithms for the Traveling Salesman Problem.",
      ],
      url: "https://github.com/dimitris23bp/Parallel-Traveling-Salesman",
    },
  ],
  education: [
    {
      id: "macedonia",
      degree: "Bachelor Degree of Applied Informatics",
      institution: "University of Macedonia, Greece",
      startDate: "Sep 2016",
      endDate: "Sep 2020",
      description: [
        "Developed proficiency in Java, C, and Python, and gained insights into economics.",
      ],
    },
  ],
  skills: [
    {
      id: "languages",
      name: "Languages & Frameworks",
      items: [
        {
          groupName: "Proficient",
          skills: [
            "Java (Spring Boot, Quarkus)",
            "Kotlin (Guice, Dropwizard, Koog)",
            "SQL",
          ],
        },
        {
          groupName: "Familiar / Past Experience",
          skills: ["TypeScript", "React", "Python", "Rust", "Swift (SwiftUI)", "C", "C#"],
        },
      ],
    },
    {
      id: "tools",
      name: "Tools & Infrastructure",
      items: [
        {
          skills: [
            "Github Actions",
            "Kafka",
            "AWS",
            "Grafana",
            "Docker",
            "PostgreSQL",
          ],
        },
      ],
    },
  ],
};
