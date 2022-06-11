import api from "../http";
import { AxiosResponse } from "axios";
import { UserInterface } from "../models/User-interface";

export default class UserService {
  static fetchUser(): Promise<AxiosResponse<UserInterface[]>> {
    return api.get<UserInterface[]>("/users");
  }
}
