import React from "react";
import ArticleBtn from "./ArticleBtn";

export default function ArticleCard(props) {
  return (
    <div className="articlecard">
      <div className="card mb-3 position-relative" style={{maxWidth : 1200 + "px"}}>
        <div className="row g-0 ">
          <div className="col-md-4">
            <img src={props.image} className="img-fluid rounded-start" alt="alt" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="text-lg font-bold my-2">{props.title}</h5>
              <p className="card-text">
                {props.desc}
              </p>
              <p className="card-text my-2">
                <small className="text-muted">- {props.auth}</small>
              </p>
              <a href={props.link} className="my-2">
                <ArticleBtn/>
              </a>
              
            </div>
          </div>
          
        </div>
        <button type="button" class="btn btn-secondary btn-sm position-absolute bottom-0 end-0" disabled>{props.tag}</button>
      </div>
    </div>
  );
}
