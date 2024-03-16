import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {

  const { isAuthorized } = useContext(Context);

  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By CodeWithSovit.</div>
      <div>
        <Link to={"https://www.facebook.com/"} target="_blank">
          <FaFacebookF className="fb" />
        </Link>
        <Link to={"https://www.youtube.com/"} target="_blank">
          <FaYoutube className="yt" />
        </Link>
        <Link to={"https://www.youtube.com/"} target="_blank">
          <FaLinkedin className="ln" />
        </Link>
        <Link to={"https://www.instagram.com/"} target="_blank">
          <RiInstagramFill className="Inst" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer