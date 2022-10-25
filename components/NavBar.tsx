import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand navbar-brand-edit ">
          <div className="navbar-start">
            <Link className="navbar-item" href="/">
              <b>
                Adventures of <br /> Zack Bradshaw
              </b>
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <div id="navMenu" className="navMenu">
            <div className="navbar-item red">
              <Link href="projects">
                <span>Projects</span>
              </Link>
            </div>
            <div className="navbar-item yellow">
              <Link href="about">
                <span>About</span>
              </Link>
            </div>
            <div className="navbar-item blue">
              <Link href="guides">
                <span>Gallery</span>
              </Link>
            </div>
          </div>
          <div className="navbar-end has-text-centered"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
