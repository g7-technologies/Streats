import React from "react";
import Wrapper from "./Loader.styled";

// import images
import img from "../../images/loader.gif";

function Loader() {

  return (
    <Wrapper>
      <div className="loader-div">
        <img src={img} alt="" className="loader-gif" />
      </div>
    </Wrapper>
  );
}

export default Loader;