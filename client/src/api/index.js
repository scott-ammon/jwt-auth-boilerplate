import axios from 'axios';

const axiosHelper = (
  {
    url,
    method = 'GET',
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
        return console.log(error.response.data + '\n' + error.response.status); 
      }
    });
};

export const authMeFromToken = (token) => {
  return axiosHelper({
    url: '/auth/me/from/token',
    method: 'POST',
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
    method: 'POST',
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
    method: 'POST',
    data: {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    },
  }).then(result => {
    return result;
  })
}
