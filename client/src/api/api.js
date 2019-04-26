import axios from 'axios';

const axiosHelper = (
  {
    url,
    method = 'POST',
    data,
  },
) => {
  return axios({
    url,
    method,
    data,
  })
    .then((response) => {
        return response;
    })
    .catch((error) => { 
      if(error.response) {
        return error.response.data;
      }
    });
};

export const authMeFromToken = (token) => {
  return axiosHelper({
    url: '/auth/me/from/token',
    data: {
      token,
    },
  }).then(result => {
      return result;
  });
}

export const login = (userData) => {
  return axiosHelper({
    url: '/auth/login',
    data: {
      email: userData.email,
      password: userData.password,
    },
  }).then(result => {
      return result;
  });
}

export const signup = (userData) => {
  return axiosHelper({
    url: '/auth/signup',
    data: {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    },
  }).then(result => {
    return result;
  });
}

export const accessLockedRoute = (token) => {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  return axiosHelper({
    url: '/locked/test',
    method: 'GET',
  }).then(result => {
    return result;
  });
}