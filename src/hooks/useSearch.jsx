import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const useSearch = (search) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const useDebounceValue = useDebounce(search);
  useEffect(() => {
    setLoading(true);
    let ignore = false;
    const searchData = async () => {
      const response = await fetch(
        `http://localhost:8000/v2/search?q=${useDebounceValue}`
      );

      const data = await response.json();
      if (!ignore) {
        setData(data?.result);
        setLoading(false);
      }
    };
    searchData();
    return () => {
      ignore = true;
    };
  }, [useDebounceValue]);
  return { data, loading };
};
export default useSearch;
