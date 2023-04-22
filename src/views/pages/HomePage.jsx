import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import fetchActionData from "../../actions/action";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await fetchNewsApi();
    })();
  }, [dispatch]);

  const fetchNewsApi = async () => {
    try {
      const res = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=cf31c857d53d4fab84360ef862b49483"
      );
      const headlines = res.data.articles;
      console.log(headlines);
      dispatch(fetchActionData(headlines));
    } catch (err) {
      console.log(err);
    }
  };

  return <div>HomePage</div>;
}
