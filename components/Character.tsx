import React from "react";
import Link from "next/link";

const Character = () => {
  return (
    <div>
      <div className="tile is-parent mx-6">
        <Link
          href="projects"
          className="tile is-child diagonal-box turtle-color-r"
        >
          <div className="turtle-text has-text-centered">
            <p className="giext retro-font has-text-centered">Project</p>
          </div>
          <div className="turtle">
            <img src="assets/projects.png"></img>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Character;
