import React from "react";

function DetailList({ title, contents}) {
  console.log("detail list");
  console.log("title", title);
  console.log("contents", contents);


  return (
    <div className="detail-list"><strong>{title}: </strong>
    {
      contents.length ? contents.map((item, index) => {
        return <div className="list-item" key={index}>{item}{ index !== contents.length - 1 ? ", " : "" }</div>
      }) : null
    }
    </div>
  );
}

export default DetailList;