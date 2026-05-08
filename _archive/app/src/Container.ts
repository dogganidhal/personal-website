import { Container } from "inversify";
import ResumeService from "./Data/Service/Resume";
import IoC from "./Misc/IoC";
import ResumeServiceImpl from "./Data/Service/Resume/ResumeServiceImpl";



export default function configureContainer(): Container {
  const container = new Container();

  container.bind<ResumeService>(IoC.TResumeService).to(ResumeServiceImpl);

  return container;
}
