import React from "react";
const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, source, author, date } = props;
  return (
    <div>
      <div className="card mt-3" style={{
           borderRadius: "5%",
          }}>
        <div
          style={{
            
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger" style={{padding: "0.6em 0.6em"}}>{source}</span>
        </div>

        <img
          src={
            imageUrl == null
              ? "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/9/2/8/5/235829-6-eng-GB/Feed-Test-SIC-Feed-20142_news_large.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
          style={{
           borderRadius: '25px 25px 0px 0px',
          }}/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author == null ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-sm"
            style={{
           borderRadius: '20px',
          }}>
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
