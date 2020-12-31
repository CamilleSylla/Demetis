import React from "react";
import { Link } from "react-router-dom";

export default function Text() {
  return (
    <div id="bio_content">
      <div id="bio_content_text">
        <h2>Qui sommes nous ?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia
          pretium ipsum, molestie sagittis magna tristique ac. Praesent
          pellentesque diam sit amet turpis pharetra, quis faucibus metus
          ullamcorper. Nulla commodo faucibus purus ut volutpat. Nullam et risus
          ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Link className="button_gold" to="/services">
          Nos Prestations
        </Link>
      </div>
      <div className="bio_content_img">
            
      </div>
    </div>
  );
}
