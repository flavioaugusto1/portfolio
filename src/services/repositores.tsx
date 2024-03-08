import axios from "axios";

export const repositories = axios.create({
  baseURL:
    "https://api.github.com/users",
});
