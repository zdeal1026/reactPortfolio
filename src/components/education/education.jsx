import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import Carousel from "react-elastic-carousel";
import "../../utils/method.jsx";

const breakPoints = [
  { width: 1, diploma: 1 },
  { width: 550, diploma: 2 },
  { width: 768, diploma: 3 },
  { width: 1200, diploma: 4 },
];

function Education() {
  return (
    <div className="education" id="education">
      <Carousel breakPoints={breakPoints}>
        <Item>Associattes in Applied Sciences; Radiography</Item>
        <Item>Bachelors of Science; Business Administration</Item>
        <Item>Certificate; Coding Boot Camp</Item>
      </Carousel>
    </div>
  );
}

export default Education;
