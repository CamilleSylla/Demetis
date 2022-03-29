import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavContext } from "../../Context/NavContext";
import "./projects.scss";
const YOUTUBE_ENDPOINT = "https://www.googleapis.com/youtube/v3/playlistItems";

export default function Projects() {
  const [videoUrls, setVideoUrls] = useState([]);
  const [logoSelect, setLogoSelect] = useContext(NavContext);

  const VideoGrid = () => {
    return (
      <ul className="video_grid">
        {videoUrls.map((video, i) => {
          const { id, snippet = {} } = video;
          const { title, thumbnails = {}, resourceId } = snippet;
          const { medium = {} } = thumbnails;
          return (
            <li key={id} className="video_card">
              <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                <p>
                  <img
                    width={medium.width}
                    height={medium.height}
                    src={medium.url}
                  />
                </p>
                <h3>{title}</h3>
              </a>
            </li>
          );
        })}
      </ul>
    );
  };

  useEffect(() => {
    if (!videoUrls.length) {
      const videos = axios
        .get(
          `${YOUTUBE_ENDPOINT}?part=snippet&playlistId=PLCnUnV3yCIYtCKNDtTj6wUWZhQNX7kBH2&maxResults=4&key=${process.env.REACT_APP_GOOGLE_YT_API_KEY}`
        )
        .then((res) => setVideoUrls(res.data.items));
    }
    console.log(videoUrls);
  }, [videoUrls]);

  return (
    <section className="projects">
      <div className="wrapper">
        {videoUrls ? <VideoGrid /> : null}
        <article className="desc">
          <h1 className="page_title">Nos Investissements déjà livrés</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            lacinia, tortor sit amet eleifend viverra, mauris massa ultricies
            lorem
          </p>
          <Link
            className="button_gold"
            to="/contact"
            onClick={() => setLogoSelect(0)}
          >
            Contact
          </Link>
        </article>
      </div>
    </section>
  );
}
