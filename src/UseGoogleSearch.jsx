import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "db2a8cd16c0338600";
const UseGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      );

      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [term]);

  return { data };
};

export default UseGoogleSearch;
