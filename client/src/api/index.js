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
    // THIS MUST GO IN THE SAGA OR THUNK
    //   if(result.data.hasOwnProperty('error')) {
    //     // displatch error action and message
    //   } else {
    //     // dispatch success
    //     localStorage.setItem('mernToken', result.data.token)
    //     this.props.liftToken(result.data)
}
