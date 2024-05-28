import React from "react";
import IDMS from "../assets/logo/IDMS.png";

import { Card } from "flowbite-react";
const GridCard = ({ datas, index }) => {
  return (
    <div key={index}>
      <Card href={datas.url} target="_blank" className="max-w-xs w-64 h-40">
        <p className="text-center">{datas.name}</p>
      </Card>
    </div>
  );
};

export default GridCard;
