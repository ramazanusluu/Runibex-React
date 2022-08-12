import React from "react";

function ImageList(props) {
  console.log(props);
  const images = props.images.map((image) => {
    return <img key={image.id} src={image.webformatURL} alt={image.tags} />;
  });
  return <div>{images}</div>;
}

export default ImageList;
