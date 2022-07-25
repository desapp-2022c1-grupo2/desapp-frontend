import axios from "axios";
import {JtpAdapter} from "../models";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api`;

export async function getAllJtp() {
  const response = await axios.get(`${API_URL}/jtp`);
  return Promise.resolve(response.data);
}

export async function getAllAssignments() {
  const response = await axios.get(`${API_URL}/assignment`);
  return Promise.resolve(response.data);
}

export async function createJtp(newJtp: JtpAdapter) {
  const response = await axios.post(`${API_URL}/jtp`, {
    name: newJtp.nombre,
    lastName: newJtp.apellido,
    email: newJtp.email,
    courseId: newJtp.materia
  });
  return Promise.resolve(response.data);
}
export async function updateJtp(jtp: JtpAdapter) {
  console.log(jtp.id)
  const data = {
    name: jtp.nombre,
    lastName: jtp.apellido,
    email: jtp.email,
    courseId: 0
  };
  const response = await axios.patch(`${API_URL}/jtp/${jtp.id}`, data);
  return Promise.resolve(response.data);
}

export async function deleteUser(id: number){
  const response = await axios.delete(`${API_URL}/jtp/${id}`);
  return Promise.resolve(response.data);
}

export async function getCourseById(id: number){
  const response = await axios.get(`${API_URL}/course/${id}`);
  return Promise.resolve(response.data);
}
export async function getAllCourses(){
  const response = await axios.get(`${API_URL}/course`);
  return Promise.resolve(response.data);
}
