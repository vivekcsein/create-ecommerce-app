import React from "react";
import "../../../styles/sass/components/Lodaer.scss";
const Loader = () => {
  return (
    <div className=" w-full min-h-screen flex justify-center items-center flex-col">
      <div className="Loader_spinner" style={{ fontSize: "100px" }}>
        <div className="Loader__spinner"></div>
        <div className="Loader__spinner"></div>
        <div className="Loader__spinner"></div>
        <div className="Loader__spinner"></div>
        <div className="Loader__spinner"></div>
        <div className="Loader__spinner"></div>
        <div className="Loader__spinner"></div>
        <div className="Loader__spinner"></div>
        <div className="Loader__spinner"></div>
        <div className="Loader__spinner"></div>
        <div className="Loader__spinner"></div>
        <div className="Loader__spinner"></div>
      </div>
    </div>
  );
};

export default Loader;
