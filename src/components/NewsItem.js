import React, { Component } from "react";

const Newsitem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source} = props;
  return (
    <div className="my-2">
      <div className="card">
      <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"85%", zIndex:"1"}}>
              {source}
            </span>
        <img
          className="card-img-top"
          src={
            !imgUrl
              ? "https://th.bing.com/th/id/OIP.SA1hv4prOzTen3YUSA7R1QHaEL?w=301&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              : imgUrl
          }
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}...
            
          </h5>
          <p className="card-text">{description}....</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
            id="readbtn"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
