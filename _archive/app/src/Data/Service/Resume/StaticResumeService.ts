import ResumeService from ".";
import Education from "../../Model/Education.Model";
import AbstractStaticService from "../AbstractStaticService";
import { injectable } from "inversify";
import Experience from "../../Model/Experience.Model";
import SkillSet from "../../Model/SkillSet.Model";


@injectable()
export default class StaticResumeService extends AbstractStaticService implements ResumeService {

  public async getEducation(): Promise<Education[]> {
    return this.fakeLoad([
      {
        degreeTitle: 'M.S Software Architecture',
        instituteName: 'CFA INSTA',
        instituteUrl: 'https://cfa-insta.fr',
        beginYear: '2018',
        graduationYear: 'Present'
      },
      {
        degreeTitle: 'B.S Computer Science',
        instituteName: 'Strasbourg University',
        instituteUrl: 'https://unistra.fr',
        beginYear: 'September 2016',
        graduationYear: 'Juin 2018'
      },
      {
        degreeTitle: 'Undergraduate Computer Sience',
        instituteName: 'ESI',
        instituteUrl: 'https://esi.dz',
        beginYear: 'September 2015',
        graduationYear: 'Juin 2016'
      }
    ]);
  }

  public async getExperience(): Promise<Experience[]> {
    return this.fakeLoad([
      {
        jobTitle: "Full-Stack Developer",
        companyName: "BNP Paribas",
        companyUrl: "https://bnpparibas.com",
        beginDate: "September 2019",
        endDate: "Present",
        missions: [
          "Migrate a monolithic Spring Boot application into a microservices architecture",
          "Identify and optimise business processes",
          "Automate business processes with workflow engines (Camunda BPMN)",
          "Migrate JSP legacy frontends into SPAs",
          "Write and maintain integration / non-regression tests",
          "Ensure automation and continuous integration using Ansible and Jenkins"
        ]
      },
      {
        jobTitle: "iOS & Android Developer",
        companyName: "Zenpark",
        companyUrl: "https://zenpark.com",
        beginDate: "May 2018",
        endDate: "Auguest 2019",
        missions: [
          "Native iOS & Android developement",
          "Proof of concept with React Native",
          "Continueous integration using Bitrise"
        ]
      },
      {
        jobTitle: "iOS & macOS Developer",
        companyName: "Appsolute GmBH",
        companyUrl: "https://appsolute.de",
        beginDate: "May 2017",
        endDate: "Juin 2017",
        missions: [
          "Design a pitch detection framework on iOS & macOS based on CoreAudio, used in production of BetterEars iOS and macOS app",
          "Make a demo application of a calendar widget iOS library"
        ]
      }
    ]);
  }

  public async getSkillSets(): Promise<SkillSet[]> {
    return this.fakeLoad([
      {
        title: 'Mobile Development',
        skills: [
          'Native iOS - Swift / Objective-C',
          'Native Android - Java & Kotlin',
          'Cross-Platform - React Native',
          'Cross-Platform - Flutter'
        ],
        icon: {
          materialIconName: 'smartphone',
        }
      },
      {
        title: 'Backends',
        skills: [
          'NodeJS',
          'Spring / Spring Boot',
          'Microservices',
          'Async messaging',
          'REST, GraphQL and gRPC APIs',
          'SQL databases',
        ],
        icon: {
          materialIconName: 'dns',
        }
      },
      {
        title: 'Frontend develoment',
        skills: [
          'React',
          'Angular and Angular Dart',
          'HTML, CSS, and JavaScript',
          'Native macOS',
          'Electron'
        ],
        icon: {
          materialIconName: 'desktop_mac',
        }
      },
      {
        title: 'DevOps',
        skills: [
          'Gitlab et Giltab CI',
          'Server administration',
          'GCP & AWS',
          'Docker & Kubernetes',
          'Jenkins',
          'Nginx'
        ],
        icon: {
          materialIconName: 'cloud',
        }
      },
      {
        title: 'UI & UX',
        skills: [
          'Sketch & Figma',
          'App prototyping',
          'Photoshop',
          'Material Design',
          'Final Cut Pro'
        ],
        icon: {
          materialIconName: 'widgets',
        }
      },
      {
        title: 'And More',
        skills: [
          'Git & Git-Flow',
          'Agile methods',
        ],
        icon: {
          materialIconName: 'more_horiz',
        }
      }
    ]);
  }
  
}