import React from "react";
import Link from "next/link";
import { ICharacter } from "../interfaces/Character";

const Character = (character: ICharacter) => {
  return (
    <div className="tile is-parent mx-6">
      <Link passHref href={character.url}>
        <a className={`tile is-child diagonal-box + ${character.color}`}>
          <div className="turtle-text has-text-centered">
            <p className="text retro-font has-text-centered">
              {character.text}
            </p>
          </div>
          <div className="character">
            <img src={character.img}></img>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Character;
