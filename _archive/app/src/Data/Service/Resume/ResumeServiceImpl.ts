import ResumeService from ".";
import Education from "../../Model/Education.Model";
import { injectable } from "inversify";
import Experience from "../../Model/Experience.Model";
import SkillSet from "../../Model/SkillSet.Model";
import Axios, {AxiosResponse} from "axios";


@injectable()
export default class ResumeServiceImpl implements ResumeService {

  private static BASE_URL = process.env["API_URL"];

  public async getEducation(): Promise<Education[]> {
    const response = await Axios
      .get<Education[]>(`${ResumeServiceImpl.BASE_URL}/resume/education`);
    return ResumeServiceImpl.extract(response);
  }

  public async getExperience(): Promise<Experience[]> {
    const response = await Axios
      .get<Experience[]>(`${ResumeServiceImpl.BASE_URL}/resume/experience`);
    return ResumeServiceImpl.extract(response);
  }

  public async getSkillSets(): Promise<SkillSet[]> {
    const response = await Axios
      .get<SkillSet[]>(`${ResumeServiceImpl.BASE_URL}/resume/skill-sets`);
    return ResumeServiceImpl.extract(response);
  }

  private static extract<T>(response: AxiosResponse<T>): T {
    if (response.status >= 400) {
      throw Error(`Unexpected status : ${response.status}`);
    }
    return response.data;
  }

}
