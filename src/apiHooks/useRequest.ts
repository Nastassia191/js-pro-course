import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostsType from '../types/PostsType';



const useRequest = <T>(defValue: T, url: string) => {

  const [data, setData] = useState<T>(defValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);



  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = () => {
    setLoading(true);
    setData(defValue);
    setTimeout(() => {
      axios.get(url)
        .then((response) => {
          setData(response.data as T);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    });

    //   fetch(url)
    //     .then((response) => {
    //       if (response.ok) {
    //         return response.json()
    //       } else {
    //         throw new Error(response.statusText);
    //       }
    //     })
    //     .then((data) => {
    //       setData(data as T);
    //     })
    //     .catch(() => {
    //       setError(true);
    //     })
    //     .finally(() => {
    //       setLoading(false);
    //     })
    // });
  }

  return { data, loading, error };
}

export default useRequest; 