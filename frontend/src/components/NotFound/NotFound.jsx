import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="page notfound">
      <div className="content">
        <img src="/notfound.png" alt="notfound" />
        <Link to={"/"}>Return To Home</Link>
      </div>
    </section>
  );
};

export default NotFound;
