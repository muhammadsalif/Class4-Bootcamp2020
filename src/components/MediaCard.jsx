import React from "react";

function MediaCard({ title, body, img_Url }) {
  return (
    <div className="myContainer">
      <h1>{title}</h1>
      <p>{body}</p>
      <img src={img_Url} alt="" />
    </div>
  );
}

export default MediaCard;
