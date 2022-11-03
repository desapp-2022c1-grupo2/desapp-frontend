import { IUser } from "@src/models"
import axios from "@util/axios"

export class Service {
  protected endpoint: string

  constructor(endpoint: string | undefined) {
    this.endpoint = endpoint || ''
  }

  private try(callabck: Function){
    try {
      return callabck()
    } catch (error) {
      console.log(error)
    }
  }

  async fetchAll(): Promise<[]> {
    try {
      const response = await axios.get(this.endpoint)
      return Promise.resolve(response.data)
    } catch(error) {
      console.log(error)
      return []
    }
  }

  async fetch(id: number, body?: object): Promise<IUser | undefined> {
    return this.try(async () => {
        const response = await axios.get(this.endpoint + id.toString())
        return Promise.resolve(response.data)
    })
  }

  async post(body: Object) {
    return this.try(async () => {
      const response = await axios.post(this.endpoint, body)
      return Promise.resolve(response.data)
    })
  }

  async patch(id: number, body: Object) {
    return this.try(async () => {
      const response = await axios.patch(this.endpoint + id.toString(), body)
      return Promise.resolve(response.data)
    })
  }

  async delete(id: number) {
    return this.try(async () => {
      const response = await axios.delete(this.endpoint + id.toString())
      return Promise.resolve(response.data)
    })
  }
}