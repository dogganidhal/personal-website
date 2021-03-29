import ResumeService from ".";
import Education from "../../Model/Education.Model";
import { injectable } from "inversify";
import Experience from "../../Model/Experience.Model";
import SkillSet from "../../Model/SkillSet.Model";
import Axios from "axios";
import AbstractAxiosService from "../AbstractAxiosService";

@injectable()
export default class ResumeServiceImpl extends AbstractAxiosService implements ResumeService {

  public async getEducation(): Promise<Education[]> {
    const response = await Axios
      .get<Education[]>('/api/resume/education');
    return ResumeServiceImpl.extract(response);
  }

  public async getExperience(): Promise<Experience[]> {
    const response = await Axios
      .get<Experience[]>('/api/resume/experience');
    return ResumeServiceImpl.extract(response);
  }

  public async getSkillSets(): Promise<SkillSet[]> {
    const response = await Axios
      .get<SkillSet[]>('/api/resume/skill-sets');
    return ResumeServiceImpl.extract(response);
  }

}
