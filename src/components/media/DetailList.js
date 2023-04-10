import React from "react";

function DetailList({ title, contents }) {


  return (
    <div className="detail-list"><strong>{title}{ ( contents.length !== 1 && title !== "Cast" && title !== "This movie is" ) ? "s" : ""}: </strong>
    {
      contents && contents.length ? contents.map((item, index) => {
        return <div className="list-item" key={index}>{item.name}{ index !== contents.length - 1 ? ", " : "" }</div>
      }) : null
    }
    </div>
  );
}

export default DetailList;