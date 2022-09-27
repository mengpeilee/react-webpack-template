const host = 'https://api.example.com:4000';

export const initSocket = () => {
  if (USER_NAME !== '' && API_KEY !== '' && LANG_SELECTOR !== '') {
    const params = {
      username: USER_NAME,
      session_id: API_KEY,
      lang: LANG_SELECTOR,
    };
    const query = generateQueryString(params);
    try {
      return createSocketInstance(query);
    } catch (e) {
      // console.log(e);
    }
  }
};

const generateQueryString = params => {
  let result = '';
  for (let key in params) {
    result += '&' + key + '=' + params[key];
  }
  return result.substr(1);
};

const createSocketInstance = query => {
  const io = require('../../node_modules/socket.io-client/dist/socket.io.js');
  return io.connect(host, {
    query,
    'connect timeout': 1000,
    reconnectionAttempts: 3,
  });
};
