import React, { useEffect, useState } from "react";
import NewsList from "./NewsList";
import axios from "axios";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsDisplay = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, settotalResults] = useState(0);
  const [skip, setSkip] = useState(0);
  const [isend, setIsend] = useState(false);

  useEffect(() => {
    document.title = `${capitalize(props.category)} - NewsApp`;
    props.setProgress(10);
    setLoading(true);
    axios
      .get(`/api/${props.category}?skip=0`)
      .then((response) => {
        props.setProgress(30);
        props.setProgress(50);
        setArticles(response.data.results);
        settotalResults(response.data.size);
        setLoading(false);
        props.setProgress(100);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const fetchMore = async () => {
    props.setProgress(10);
    props.setProgress(30);
    props.setProgress(50);
    const resp = await fetch(`/api/${props.category}?skip=${skip + 12}`);
    setSkip(skip + 12);
    const data = await resp.json();
    if (data?.length === 0) {
      setIsend(true);
    }
    setArticles(articles.concat(data.results));
    props.setProgress(100);
  };

  return (
    <>
      <h1 className="text-center" style={{ marginTop: "65px" }}>
        Top Headlines from {capitalize(props.category)}{" "}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMore}
        hasMore={articles.length !== totalResults}
        loader={!isend && <Spinner />}
        endMessage={
          articles.length > 6 &&
          articles.length >= totalResults / 2 && (
            <p style={{ textAlign: "center" }}>
              {<b>Yay! You have seen it all</b>}
            </p>
          )
        }
      >
        <div className="container">
          <div className="row ">
            {!loading && <NewsList articles={articles} />}
          </div>
        </div>
      </InfiniteScroll>
      <div
        className="text-center text-white p-1 bg-dark"
      >
        © 2023 Copyright:
        <h6>Siddharth Shanker</h6>
          
      </div>
    </>
  );
};

export default NewsDisplay;
