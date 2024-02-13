import { useEffect, useState } from "react";

const useNewsQuery = (query) => {
  const [data, setData] = useState();

  const [loading, setLoading] = useState({
    isLoading: false,
    message: "",
  });
  const [error, setError] = useState(null);
  const fetchData = async (query, ignore) => {
    try {
      setLoading({
        ...loading,
        isLoading: true,
        message: "Fetching news....",
      });
      const response = await fetch(
        `http://localhost:8000/v2/top-headlines?category=${query}`
      );

      if (!response.ok) {
        const errorMessage = `Fetching data failed: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      if (!ignore) setData(data);
      setLoading({
        ...loading,
        isLoading: false,
        message: "",
      });
    } catch (error) {
      setError(error);
      setLoading({
        ...loading,
        isLoading: false,
        message: "",
      });
    }
  };
  useEffect(() => {
    let ignore = false;
    setLoading({
      ...loading,
      isLoading: true,
      message: "Finding location...",
    });

    fetchData(query, ignore);
    return () => {
      ignore = true;
    };
  }, [query]);
  return {
    data,
    isLoading: loading.isLoading,
    loading: loading.message,
    error,
  };
};
export default useNewsQuery;
