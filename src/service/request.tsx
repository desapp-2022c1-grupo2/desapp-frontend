import axios from "axios";
import {Jtp} from "../models";

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

export async function createJtp(newJtp: Jtp) {
  console.log(newJtp)
  const response = await axios.post(`${API_URL}/jtp`, newJtp);
  return Promise.resolve(response.data);
}
export async function updateJtp(jtp: Jtp) {
  const response = await axios.patch(`${API_URL}/jtp/${jtp.id}`, jtp);
  return Promise.resolve(response.data);
}

export async function updateJtpDatagrid(jtp: Jtp) {
  const response = await axios.patch(`${API_URL}/jtp/${jtp.id}`, jtp);
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
