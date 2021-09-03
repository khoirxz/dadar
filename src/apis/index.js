import axios from "axios";

const API = axios.create({
  baseURL: "https://dadar-server.herokuapp.com/api/masakan",
});

export const fetchRecipes = () => API.get("/");
export const fectDetails = (id) => API.get(`/details/${id}`);
