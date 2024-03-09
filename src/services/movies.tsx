import axios from "axios";

export const movies = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTlmMjQxOWMzNGYwZmY5NWM5ZmE5ZjRmN2I1NGE0YSIsInN1YiI6IjY0NjZkOWNlZDE4NTcyMDEyMDdmZjZhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z94mKjp-3yQpqOrXtYWSKQKPZZ-YrdUWoskW4iHL8VA",
  },
});
