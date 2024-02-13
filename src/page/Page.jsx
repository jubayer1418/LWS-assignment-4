import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsBoard from "../components/mainContents/NewsBoard";
import useSearch from "../hooks/useSearch";

function Page() {
  const [search, setSearch] = useState(null);
  const { data, loading } = useSearch(search);
  console.log(loading);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Navbar handleSearch={handleSearch} />
      <NewsBoard data={data} loading={loading} />
      <Footer />
    </div>
  );
}

export default Page;
