import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const cache = {};

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [reloadTrigger, setReloadTrigger] = useState(0);

  const reload = useCallback(() => {
    setReloadTrigger(prev => prev + 1);
  }, []);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        if (cache[url]) {
          const cachedData = cache[url];
          setData(typeof cachedData === 'string' ? JSON.parse(cachedData) : cachedData);
          setError(null);
        } else {
          const config = {
            url,
            method: options.method || "GET",
            headers: options.headers || {},
          };

          if (options.method && options.method !== "GET") {
            config.data = options.body || null;
          }

          const response = await axios(config);
          const responseData = response.data;
          cache[url] = responseData;
          setData(responseData);
          setError(null);
        }
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options, reloadTrigger]);

  return { data, error, loading, reload };
};

export default useFetch;