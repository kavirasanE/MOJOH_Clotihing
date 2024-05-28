import React from "react";
import GridCard from "./GridCard";

const DisplayContent = () => {
  return (
    <div className="w-full p-10">
      <div className="grid grid-cols-3 gap-10">
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
      </div>
    </div>
  );
};

export default DisplayContent;
