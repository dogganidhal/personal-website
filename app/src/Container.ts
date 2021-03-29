import { Container } from "inversify";
import ResumeService from "./Data/Service/Resume";
import IoC from "./Misc/IoC";
import ResumeServiceImpl from "./Data/Service/Resume/ResumeServiceImpl";
import UserService from "./Data/Service/User";
import UserServiceImpl from "./Data/Service/User/UserServiceImpl";



export default function configureContainer(): Container {
  const container = new Container();

  container.bind<ResumeService>(IoC.TResumeService).to(ResumeServiceImpl);
  container.bind<UserService>(IoC.TUserService).to(UserServiceImpl);

  return container;
}
