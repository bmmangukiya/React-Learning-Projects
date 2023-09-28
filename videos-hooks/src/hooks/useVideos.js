import { useState, useEffect } from "react";
import youtube from "../components/apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  const [search1,setSearch] = useState(true)
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);
  
  useEffect(() => {
    console.log('2nd');
  },[search1]);

  useEffect(() => {
    console.log('1st');
  },[]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
    setSearch(false)
  };

  return [videos, search];
};

export default useVideos;
