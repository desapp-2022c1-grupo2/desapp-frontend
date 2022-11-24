import axios from "@util/axios"
import { Admin, AdminAdapter, IAdmin, IAdminResponse } from "@models"

export const fetchAllAdmins = async (): Promise<IAdmin[]> => {
  try {
    const response = await axios.get('/admin')
    const data: IAdminResponse[] = await Promise.resolve(response.data)
    return data.map(x => (new AdminAdapter(x).json))
  } catch (err) {
    console.error(err)
    return []
  }
}

export const getAdmin = async (id: number): Promise<IAdmin | undefined> => {
  try {
    const response = await axios.get(`/admin/${id}`)
    const admin: IAdminResponse = await Promise.resolve(response.data)
    return new AdminAdapter(admin).json
  } catch (err) {
    console.error(err)
  }
}

export const postAdmin = async (admin: IAdmin) => {
  try {
    const response = await axios.post(
      '/admin',
      {
        ...(new Admin(admin).makeRequest()),
        password: 'administrador'
      }
    )
    return Promise.resolve(response.data)
  } catch (err) {
    console.error(err)
  }
}

export const updateAdmin = async (admin: IAdmin) => {
  try {
    const response = await axios.patch(
      `/admin/${admin.id}`,
      new Admin(admin).makeRequest(),
    )
    return Promise.resolve(response.data)
  } catch (err) {
    console.error(err)
  }
}

export const deleteAdmin = async (admin: IAdmin) => {
  try {
    const response = await axios.delete(`/admin/${admin.id}`)
    return Promise.resolve(response.data)
  } catch (err) {
    console.error(err)
  }
}
