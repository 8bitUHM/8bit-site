import * as React from "react";
import { useState, FC } from "react";

interface Props {
  imageUri: string;
  className: string;
}

const LoadingImage: FC<Props> = (props) => {
  const [loadingStyle, changeLoadingStyle] = useState({});
  const [imageStyle, changeImageStyle] = useState({ display: "none" });

  return (
    <>
      <div className="d-flex justify-content-center " style={loadingStyle}>
        <div className="spinner-border my-5" style={loadingStyle}></div>
      </div>

      <img
        src={props.imageUri}
        className={props.className}
        onLoad={() => {
          changeLoadingStyle({ display: "none" });
          changeImageStyle({ display: "" });
        }}
        style={imageStyle}
      ></img>
    </>
  );
};

export default LoadingImage;
