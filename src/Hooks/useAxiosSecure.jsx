import axios from "axios";

const axioxSecure = axios.create({
  baseURL: 'http://localhost:5000/',
});

const useAxiosSecure = () => {
  return axioxSecure;
};

export default useAxiosSecure;