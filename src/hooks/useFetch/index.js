import { useEffect, useState } from "react";

export default function useFetch(url, options, trigger = false) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!trigger) {
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        if (!res.ok) {
          throw new Error(`Failed to fetch. Status: ${res.status}`);
        }

        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url, options, trigger]);

  return { data, loading, error };
}
