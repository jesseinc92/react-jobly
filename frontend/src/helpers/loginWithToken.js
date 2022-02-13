import JoblyApi from "../api";


const loginWithToken = async (token, username, setToken, setUser) => {
  localStorage.setItem('token', JSON.stringify(token));
  setToken(token);

  const authedUser = await JoblyApi.getUser(token, username);
  localStorage.setItem('user', JSON.stringify(authedUser));
  setUser(authedUser);
}


export default loginWithToken;