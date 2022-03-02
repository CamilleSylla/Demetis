import "./presentation.scss";


export default function Presentation() {

  return (
    <section className="presentatiton">
      <h1>
        Pourquoi Demetis Conseil peut vous accompagner dans votre investissement
        ?
      </h1>
      <div className="video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/ign_YoFb1mE?&autoplay=1"
          title="Demetis Conseil Investissement"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
}
