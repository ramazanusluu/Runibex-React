import React from "react";
import northernPic from "../img/northern.png";
import southernPic from "../img/southern.jpg";
import "./Hemisphere.css";

const hemisphereConfig = {
  Northern: {
    text: "It is Northern Hemisphere",
    picture: northernPic,
  },
  Southern: {
    text: "It is Southern Hemisphere",
    picture: southernPic,
  },
};

function HemisphereDisplay({ latitude }) {
  const hemisphere = latitude > 0 ? "Northern" : "Southern";
  const { text, picture } = hemisphereConfig[hemisphere];

  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt="resim" />
        </div>
        <div className="ui teal bottom attached label">
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
}

export default HemisphereDisplay;
