import React from "react";
import CardItem from "../CardItem";

const CardList = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl text-gray-500 text-center mb-5 font-bold">
        Danh sách nhà cho thuê
      </h1>
      <CardItem />
    </div>
  );
};

export default CardList;
