import AbstractAxiosService from "../AbstractAxiosService";
import UserService from "./index";
import {injectable} from "inversify";
import User from "../../Model/User.Model";
import Axios from "axios";


@injectable()
export default class UserServiceImpl extends AbstractAxiosService implements UserService {

	public async getUser(): Promise<User> {
		const response = await Axios
			.get<User>('/api/user');
		return UserServiceImpl.extract(response);
	}

}
