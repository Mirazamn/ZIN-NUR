import './style.css'
import '../../index.css'
import '../variable.css'

import AbtImg from '../../assets/images/Visuals.svg'

function AboutUs() {
    return (
        <section className='about-us'>
            <div className="container flex">
                <img src={AbtImg} alt="" />
                <div className="abt-txt">
                    <h1>Biz haqimizda</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vero, optio rerum ducimus modi voluptates, eos facilis officia hic repellendus dolor, tenetur temporibus doloremque odio magni recusandae aspernatur quis! Maiores quasi ut accusamus rerum inventore aliquid, consequuntur repellendus officia nisi sint provident quis reiciendis velit eaque, harum impedit voluptatibus consequatur, magnam dolores voluptates ea earum. Provident facere pariatur esse vero ex. Quidem nostrum recusandae sit repellat eligendi tenetur natus, minus sint quibusdam? Iste provident voluptatibus error in, incidunt eos velit?
                    </p>
                </div>
            </div>
        </section>
    )
}


export default AboutUs;