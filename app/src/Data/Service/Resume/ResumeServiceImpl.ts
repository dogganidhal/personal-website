import ResumeService from ".";
import Education from "../../Model/Education.Model";
import { injectable } from "inversify";
import Experience from "../../Model/Experience.Model";
import SkillSet from "../../Model/SkillSet.Model";
import Axios, {AxiosResponse} from "axios";

const BASE_URL = process.env["REACT_APP_API_URL"] || "http://localhost:8080";
const API_KEY = process.env["REACT_APP_API_KEY"];

@injectable()
export default class ResumeServiceImpl implements ResumeService {

  public async getEducation(): Promise<Education[]> {
    const response = await Axios
      .get<Education[]>(`${BASE_URL}/api/resume/education?api-key=${API_KEY}`);
    return ResumeServiceImpl.extract(response);
  }

  public async getExperience(): Promise<Experience[]> {
    const response = await Axios
      .get<Experience[]>(`${BASE_URL}/api/resume/experience?api-key=${API_KEY}`);
    return ResumeServiceImpl.extract(response);
  }

  public async getSkillSets(): Promise<SkillSet[]> {
    const response = await Axios
      .get<SkillSet[]>(`${BASE_URL}/api/resume/skill-sets?api-key=${API_KEY}`);
    return ResumeServiceImpl.extract(response);
  }

  private static extract<T>(response: AxiosResponse<T>): T {
    if (response.status >= 400) {
      throw Error(`Unexpected status : ${response.status}`);
    }
    return response.data;
  }

}
