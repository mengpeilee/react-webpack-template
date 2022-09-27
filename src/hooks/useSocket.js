import {useEffect} from 'react';
import {WebSocketHandler} from '../util';
const {initSocket} = WebSocketHandler;

let socket = undefined;
export const useSocket = handleUpdateCallback => {
  useEffect(() => {
    if (!socket) {
      socket = initSocket();
    }
    if (socket) {
      updateSocketEventListener(socket);
    }
  }, [handleUpdateCallback]);

  useEffect(() => {
    return () => socket.disconnect();
  }, []);

  const updateSocketEventListener = socket => {
    socket.$events = {};
    socket.on('connect', () => {
      //console.log('%c connected ', 'background: green;');
    });
    socket.on('disconnect', async reason => {
      //console.log('%c disconnect ', 'background: green;');
      socket.socket.connect();
      //console.log(reason);
    });

    socket.on('reconnect', function(nr) {
      //console.log('%c reconnected', 'background: green;');
      //console.log('reconnected, nr: ', nr);
    });

    socket.on('connect_error', err => {});
    socket.on('update', response => {
      const {tag, data} = response;
      // console.log('%c update ', 'background: green;');
      // console.log(`%c ${tag} `, 'background: blue;');
      try {
        handleUpdateCallback(tag, JSON.parse(data));
      } catch (err) {
        // console.log(err);
      }
    });
  };

  return socket;
};
