import Link from "next/link";
import Character from "../components/Character";

const IndexPage = () => (
  <section className="hero is-light is-bol is-fullheight">
    <div className="hero-boy" id="tv">
      <div className="section">
        <div className="container has-text-centered">
          <p className="giant-text retro-font retro-text-shadow has-text-centered">
            Select your character
          </p>
        </div>
      </div>
      <div className="padding-top-4em character-select">
        <div className="section character-select">
          <div className="container character-select">
            <div className="tile is-ancestor character-select">
              <Character
                text="Project"
                color="red"
                img="../assets/Projects.png"
                url="projects"
              />
              <Character
                text="About"
                color="yellow"
                img="../assets/About.png"
                url="about"
              />
              <Character
                text="ArtGallery"
                color="blue"
                img="../assets/ArtGallery.png"
                url="gallery"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default IndexPage;
