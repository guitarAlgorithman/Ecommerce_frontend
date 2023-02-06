import axios from "axios";

const baseURL = "http://localhost:3000";
const signIn_API = async (username, password) => {
  const datos = {
    username: username,
    password: password
  };
  const result = await axios.post(`${baseURL}/user/signin`, datos);
  return result;
}

const saveToken = async (token) => {
  sessionStorage.setItem("token", token);
}
const readToken = async () => {
  return sessionStorage.getItem("token");
}

const signIn = async (username, password) => {

  const result = await signIn_API(username, password);

  if (result) {
    saveToken(result.data.token);
    return true;
  }
  return false;
}

const signUp = async (username, password,name,email)=>{
  const datos = {
    username: username,
    password: password,
    name:name,
    email:email,
  };
  const result = await axios.post(`${baseURL}/user/signup`, datos);
  return result;
}

export { signIn, readToken,signUp };