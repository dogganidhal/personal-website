import User from "../../Model/User.Model";


export default interface UserService {
	getUser(): Promise<User>;
}
