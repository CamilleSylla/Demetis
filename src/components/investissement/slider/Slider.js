import "./slider.scss"

export default function Slider () {

    const Card = () => {
        return (
            <article className="recap">
                <img src="https://images.squarespace-cdn.com/content/v1/5ad8986c1aef1ddf0db431a3/1554801791770-LKNZ7RQQI3YHYNXE1PGU/fiche-repas?format=1000w"/>
                <div className="recap_hover">
                <h1>Fiche N°</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia, tortor sit amet eleifend viverra, mauris massa ultricies lorem</p>
                </div>
            </article>
        )
    }



    const Displayer = () =>  {

        return (
            <div className="displayer">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        )
    }

    return (
        <section className="slider">
            <div className="slider_wrapper">
            <h1>Retrouvez nos  fiches récaps</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Displayer/>
            </div>
        </section>
    )
}