import React from "react";
import ArticleBtn from "./ArticleBtn";

export default function TrendingCard(props) {
  return (
    <div className="trendingcard h-full" >
      <div className="card h-full w-full" >
        <img src={props.image} className="card-img-top" alt="alt img" style={{height: 40+"%"}}/>
        <div className="card-body ">
          <h4 className="text-lg font-bold my-2" >{props.title}</h4>
          <p className="card-text">
            {props.desc}
          </p>
          <p className="text-muted my-2">
            - {props.auth}
          </p>
          <a href={props.link} className="" >
            <ArticleBtn />
          </a>
        </div>
      </div>
    </div>
  );
}
