import './style.css'
import '../../index.css'
import '../variable.css'

import HeroVideo from '../../assets/Videos/hero.mp4'

function Hero() {
    return (
        <section className='hero'>
            <div className="video-bg-wrapper">
                <video src={HeroVideo} autoPlay muted loop></video>
                <div className="overlay"></div>
            </div>

            <div className="content">
              <h1> ZIN-NUR <br /> Akademiyasi </h1>
              <p>Ta’lim — bu sizga investitsiya. Zin-Nur Akademiyasi bilan uni eng to‘g‘ri joyda boshlang!</p>
            </div>
        </section>
    )
}


export default Hero;