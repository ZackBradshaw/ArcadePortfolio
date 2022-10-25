import Link from "next/link";

const IndexPage = () => (
  <div>
    <section className="hero is-light is-bol is-fullheight">
      <div className="hero-boy" id="tv">
        <div className="padding-top-4em character-select">
          <div className="section">
            <div className="container has-text-centered">
              <p className="giant-text retro-font retro-text-shadow has-text-centered">
                Select your character
              </p>
            </div>
          </div>
          <div className="section character-select">
            <div className="container character-select">
              <div className="tile is-ancestor character-select">
                <div className="tile is-parent mx-6">
                  <Link
                    href="about"
                    className="tile is-child diagonal-box turtle-color-y"
                  >
                    <div className="turtle-text has-text-centered">
                      <p className="giext retro-font has-text-centered">
                        About zack
                      </p>
                    </div>
                    <div className="turtle">
                      <img src="assets/about.png"></img>
                    </div>
                  </Link>
                </div>

                <div className="tile is-parent mx-6">
                  <Link
                    href="gallery"
                    className="tile is-child diagonal-box turtle-color-b"
                  >
                    <div className="turtle-text has-text-centered">
                      <p className="giext retro-font has-text-centered">
                        Gallery
                      </p>
                    </div>
                    <div className="turtle">
                      <img src="assets/artgallery.png"></img>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default IndexPage;
