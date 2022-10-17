import {IUser} from './IUser'
import {ICourse} from "@models/ICourse";

export interface IJtp extends IUser {
    course?: ICourse,
}
