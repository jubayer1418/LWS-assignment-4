import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsBoard from "../components/mainContents/NewsBoard";
import { useDebounce } from "../hooks/useDebounce";

function Page() {
  const [data, setData] = useState(null);
  console.log(data);
  const [search, setSearch] = useState(null);
  const useDebounceValue = useDebounce(search);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    let ignore = false;
    const searchData = async () => {
      const response = await fetch(
        `http://localhost:8000/v2/search?q=${useDebounceValue}`
      );

      const data = await response.json();
      if (!ignore) setData(data);
    };
    searchData();
    return () => {
      ignore = true;
    };
  }, [useDebounceValue]);
  return (
    <div>
      <Navbar handleSearch={handleSearch} />
      <NewsBoard data={data} />
      <Footer />
    </div>
  );
}

export default Page;
