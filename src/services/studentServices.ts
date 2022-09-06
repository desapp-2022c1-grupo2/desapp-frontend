import axios from "axios"
import {API_URL} from "../const"
import {IStudentResponse, studentAdapter} from "../adapters/studentAdapter";
import {IStudent} from "../models/IStudent";

export const getAllStudents = async (): Promise<IStudent[]> => {
    try {
        const response = await axios.get(`${API_URL}/student`)
        const studentList: IStudentResponse[] = await Promise.resolve(response.data)
        return studentList.map(student => studentAdapter(student))
    } catch (err) {
        console.error(err)
        return []
    }

}
