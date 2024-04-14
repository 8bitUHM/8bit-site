import * as React from "react";
import { useState, FC } from "react";

interface Props {
  imageUri: string;
  className: string;
}

const LoadingImage: FC<Props> = (props) => {
  const [loadingStyle, changeLoadingStyle] = useState({});

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
        }}
      ></img>
    </>
  );
};

export default LoadingImage;