import React from "react";
import noimg from './img/default.png'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source}  = props;
    return (
      <div className="my-3">
        <div className="card" >
          <div style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0"
          }}>
            <span className="badge rounded-pill text-bg-danger"> {source} </span>
            </div>
          <img src={!imageUrl?noimg:imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">Published by {!author?"Unknown": author} on {new Date(date).toISOString().replace('T',' Time:-').replace('Z',' ')}</small></p>
            <a rel="noreferrer"
              href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
