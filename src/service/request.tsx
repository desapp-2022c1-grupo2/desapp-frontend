import axios from "axios";

const API_URL = "http://localhost:3001/api";

export async function getAllJtp() {
  const response = await axios.get(`${API_URL}/jtp`);
  return Promise.resolve(response.data);
}

export async function getAllAssignments() {
  const response = await axios.get(`${API_URL}/assignment`);
  return Promise.resolve(response.data);
}
