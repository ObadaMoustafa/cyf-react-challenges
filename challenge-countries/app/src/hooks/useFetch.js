import { useState } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  async function performFetch() {
    try {
      setError(null);
      setIsLoading(true);
      const res = await fetch(url);
      if (!res.ok)
        throw new Error(`http Error (${res.status}): ${res.statusText}`);
      setData(await res.json());
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  return { isLoading, error, performFetch, data };
};
