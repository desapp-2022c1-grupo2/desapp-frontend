import axios from "@util/axios"
import { IAdmin } from "@models"

export const getAllAdmins = async (): Promise<IAdmin[]> => {
  try {
    const response = await axios.get('/admin')
    const adminList: IAdmin[] = await Promise.resolve(response.data)
    return adminList
  } catch (err) {
    console.error(err)
    return []
  }
}

export const getAdmin = async (id: number): Promise<IAdmin | undefined> => {
  try {
    const response = await axios.get(`/admin/${id}`)
    const admin: IAdmin = await Promise.resolve(response.data)
    return admin
  } catch (err) {
    console.error(err)
  }
}

export const createAdmin = async (newAdmin: IAdmin) => {
  try {
    const response = await axios.post('/admin', newAdmin)
    return Promise.resolve(response.data)
  } catch (err) {
    console.error(err)
  }
}

export const updateAdmin = async (admin: IAdmin) => {
  try {
    const response = await axios.patch(
      `/admin/${admin.id}`,
      admin,
    )
    return Promise.resolve(response.data)
  } catch (err) {
    console.error(err)
  }
}

export const deleteAdmin = async (admin: IAdmin) => {
  try {
    const response = await axios.delete(`/jtp/${admin.id}`)
    return Promise.resolve(response.data)
  } catch (err) {
    console.error(err)
  }
}
