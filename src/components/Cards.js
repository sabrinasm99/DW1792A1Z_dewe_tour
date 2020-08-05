import React from "react";

function Cards(props) {
  let cardList = props.posts.map((val) => {
    return (
      <div
        key={val.id}
        className="rounded-md bg-white py-12 px-8"
        style={{ height: "290px" }}
      >
        <img src={val.img} className="mx-auto" />
        <h4 className="font-bold text-black mx-auto mt-4">{val.title}</h4>
        <h4 className="font-light text-gray-600 mx-auto text-sm mt-2">
          {val.content}
        </h4>
      </div>
    );
  });
  return <div className="grid grid-cols-4 gap-24">{cardList}</div>;
}

export default Cards;
