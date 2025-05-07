import { FaArrowRight } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

import './style.css'
import '../../components/variable.css'
import '../../index.css'


function Plans() {
    return (
        <section className="plan-sect">
          <div className="container">
            <p className="body-m">
              Kurslar
            </p>

            <h1 className="display-m">Bizning <br /> Kurslarimiz</h1>
            

            <div className="plan-cards flex">
              {/* Free Plan */}
              <div data-aos="fade-up" data-aos-delay="300" className="card">
                <h6 className="body-l">Arab Tili KIDS</h6>
                <h2><span className="display-l">399,000</span>/ oy</h2>
                <h4 className="body-m">Guruh bilan o‘qish</h4>
                <ul>
                  <li className="display-x"><FaCheck className='icon'/> 3 dars / hafta </li>
                  <li className="display-x"><FaCheck className='icon'/> Online darslar </li>
                  <li className="display-x"><FaCheck className='icon'/> Guruh bilan o‘qish </li>
                </ul>
                <a><button className="display-x">Boshlash</button></a>
              </div>
              {/* Free Plan */}
    
              {/* Professional Plan */}
              <div data-aos="fade-up" data-aos-delay="200" className="card">
                <h6 className="body-l">Ingiliz Tili</h6>
                <h2><span className="display-l">599,000</span>/ oy</h2>
                <h4 className="body-m">Guruh bilan o‘qish</h4>
                <ul>
                  <li className="display-x"><FaCheck className='icon'/> 4 dars / hafta </li>
                  <li className="display-x"><FaCheck className='icon'/> Sertifikat </li>
                  <li className="display-x"><FaCheck className='icon'/> Online + Offline </li>
                </ul>
                <a><button className="display-x">Boshlash</button></a>
              </div>
              {/* Professional Plan */}
    
              {/* Enterprise Plan */}
              <div data-aos="zoom-in" data-aos-delay="100" className="card enterprise">
                <h6 className="body-l">Arab Tili Fonetikasi</h6>
                <h2><span className="display-l">999,000</span>/ oy</h2>
                <h4 className="body-m">Sertifikat + Test tayyorgarligi</h4>
                <ul>
                  <li className="display-x"><FaCheck className='icon'/> Shaxsiy mentor </li>
                  <li className="display-x"><FaCheck className='icon'/> Doimiy qo‘llab-quvvatlash </li>
                  <li className="display-x"><FaCheck className='icon'/> 5 dars / hafta </li>
                </ul>
                <a>
                  <button className="display-x flex">
                  Boshlash <FaArrowRight />
                  </button>
                </a>
              </div>
              {/* Enterprise Plan */}

            </div>
          </div>
        </section>
      );
}


export default Plans;