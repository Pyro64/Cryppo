import React from "react";

export default function SearchResult(props) {
  return (
    <div>
      {props.result.length === 0 ? <div>пусто</div> : <div>{props.result}</div>}
    </div>
  );
}
