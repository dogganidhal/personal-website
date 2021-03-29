import { useState, useEffect } from "react";
import ResumeService from "../Data/Service/Resume";
import { useInstance } from "../Components/ContainerProvider";
import IoC from "../Misc/IoC";
import SkillSet from "../Data/Model/SkillSet.Model";
import User from "../Data/Model/User.Model";
import UserService from "../Data/Service/User";


type UserLoaderResponse = [boolean, User, Error];


export default function useUserLoader(): UserLoaderResponse {
  const [isLoading, setLoading] = useState();
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const userService = useInstance<UserService>(IoC.TUserService);

  /*eslint-disable*/
  useEffect(() => {
    setLoading(true);
    userService.getUser()
      .then(user => setUser(user))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);
  /*eslint-enable*/

  return [isLoading, user, error];
}
