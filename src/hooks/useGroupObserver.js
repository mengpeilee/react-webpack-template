import {useEffect, useState} from 'react';

// observe group change by checking group_id
export const useGroupObserver = (targetElementId, callback) => {
  const [globalGroupId, setGlobalGroupId] = useState('');

  useEffect(() => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      return;
    } else {
      const targetNode = document.getElementById(targetElementId);
      const observerCallback = () => {
        if (typeof GROUP_ID === 'undefined') return;
        if (globalGroupId === GROUP_ID) return;
        else {
          setGlobalGroupId(GROUP_ID);
        }
      };
      const observer = new MutationObserver(observerCallback);
      observer.observe(targetNode, {attributes: true});
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    callback();
  }, [globalGroupId]);
};
