import axios from "axios";

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
