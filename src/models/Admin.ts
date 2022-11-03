import { IUser, IUserResponse, User, UserAdapter } from "./User"

export interface IAdmin extends IUser{}

export interface IAdminResponse extends IUserResponse {}

export class Admin extends User {
  constructor(admin: IAdmin) {
    super({
      id: admin.id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
    })
  }
}

export class AdminAdapter extends UserAdapter {
  constructor(response: IAdminResponse) {
    super(response)
  }
}