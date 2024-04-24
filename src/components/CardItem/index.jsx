import React from "react";

const CardItem = () => {
  return (
    <div>
      <div className="card-item grid grid-cols-5 gap-12">
        <div className="bg-red-500 w-[16rem] h-[16rem] flex items-center justify-center">
          A
        </div>
        <div className="bg-blue-500 w-[16rem] h-[16rem] flex items-center justify-center">
          B
        </div>
        <div className="bg-gray-500 w-[16rem] h-[16rem] flex items-center justify-center">
          C
        </div>
        <div className="bg-green-500 w-[16rem] h-[16rem] flex items-center justify-center">
          D
        </div>
        <div className="bg-yellow-500 w-[16rem] h-[16rem] flex items-center justify-center">
          E
        </div>
        <div className="bg-black w-[16rem] h-[16rem] text-white flex items-center justify-center">
          F
        </div>
      </div>
    </div>
  );
};

export default CardItem;
