import { IJtp, IJtpResponse, IUser, Jtp, JtpAdapter } from '@models'
import { Service } from './Service'

export class JtpService extends Service {
  constructor(){ super('/jtp/') }

  async fetchAllJtps(): Promise<IJtp[]> {
    const data: IJtpResponse[] = await super.fetchAll()
    return data.map(x => new JtpAdapter(x).json)
  }

  fetch(id: number): Promise<IJtp | undefined> {
    return super.fetch(id)
  }

  post(jtp: IJtp) {
    return super.post(new Jtp(jtp).makeRequest())
  }

  patch(id: number, body: IJtp) {
    return super.patch(id, new Jtp(body).makeRequest())
  }
}