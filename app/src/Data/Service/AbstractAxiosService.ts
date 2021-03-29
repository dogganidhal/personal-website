import { injectable } from "inversify";
import {AxiosResponse} from "axios";



@injectable()
export default abstract class AbstractAxiosService {

  protected static extract<T>(response: AxiosResponse<T>): T {
    if (response.status >= 400) {
      throw Error(`Unexpected status : ${response.status}`);
    }
    return response.data;
  }

}
