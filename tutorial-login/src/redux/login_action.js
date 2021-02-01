import axios from 'axios';

const login = async (email, password) => {
  try {
    const response = await axios.post('http://192.168.0.28:3000/login', {
      email,
      password
    });

    if (response.status === 200) {
      return Promise.resolve(response.data.data);
    }

    return Promise.reject(response?.data?.message ?? 'Login failure');
  } catch (e) {
    return Promise.reject(e?.response?.data?.message ?? 'Login failure');
  }
};

export default login;
