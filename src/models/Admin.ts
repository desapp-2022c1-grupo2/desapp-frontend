import { deleteAdmin, updateAdmin } from "@src/services"
import { IUser, IUserResponse, User, UserAdapter } from "./User"

export interface IAdmin extends IUser{}

export interface IAdminResponse extends IUserResponse {}

export class Admin extends User {
  constructor(admin: IAdmin | undefined) {
    super(admin
      ? admin
      : {
        id: -1,
        email: '',
        name: { first: '', last: '' }
      }
    )
  }
  
  makeRequest(): IAdminResponse {
    return super.makeRequest()
  }

  async delete(): Promise<any> { deleteAdmin(this.json) }
  async patch(): Promise<any> { updateAdmin(this.json) }
}

export class AdminAdapter extends UserAdapter {
  constructor(response: IAdminResponse) {
    super(response)
  }
}