import FaChalkboardTeacherIcon from '../../assets/ui-icons/FaChalkboardTeacher.svg'
import ClockIcon from '../../assets/ui-icons/ClockIcon.svg'
import GlobeIcon from '../../assets/ui-icons/GlobeIcon.svg'
import GiftIcon from '../../assets/ui-icons/giftIcon.svg'
import EarthIcon from '../../assets/ui-icons/earthIcon.svg'

import './style.css'
import '../../components/variable.css'
import '../../index.css'

function Services() {
    return (
        <section className="plan">
          <div className="container">
            <div className="plan-cards flex">
              {/* Info */}
              <div data-aos="fade-up" data-aos-delay="300" className="info-card">
                <h6>Bizning xizmatlar</h6>
                <h3>Sizni Kutayotgan Xizmatlar</h3>
                <li>ZIN-NUR Akademiyasi o‘quvchilarga ingliz va arab tillari bo'yicha kurslar taklif etadi. Shuningdek, biz imtihonlarga tayyorgarlik, rasmiy sertifikatlar olish va shaxsiy rivojlanish bo‘yicha ham to‘liq yordam ko‘rsatamiz. </li>
                <button>
                  <a href="">
                    Bog'lanish
                  </a>
                </button>
              </div>
              {/* /Info */}

              {/* Free Plan */}
              <div data-aos="fade-up" data-aos-delay="300" className="card">
              <img src={ClockIcon} alt="" />
              <h2>Qulay vaqtlar </h2>
                <li className="display-x"> Sizning kundalik jadvalingizga mos dars vaqtlarini tanlash imkoniyati mavjud. Darslar jadvali ish, o‘qish, shaxsiy faoliyat yoki oilaviy majburiyatlaringizga to‘liq moslashtiriladi.  </li>
              </div>
              {/* Free Plan */}

              {/* Free Plan */}
              <div data-aos="fade-up" data-aos-delay="300" className="card">
              <img src={FaChalkboardTeacherIcon} alt="" />
              <h2> Tajribali o‘qituvchilar </h2>
                <li className="display-x"> 15 yildan ortiq tajribaga ega, o‘rta va oliy ta’lim sohasida faoliyat yuritgan malakali ustozlar bilan interaktiv va samarali darslar. oliy ta’lim sohasida faoliyat yuritgan malakali ustozlar bilan </li>
              </div>
              {/* Free Plan */}

               {/* Free Plan */}
               <div data-aos="fade-up" data-aos-delay="300" className="card">
                <img src={GlobeIcon} className="globeicon" />
                <h2> Onlayn va offlayn darslar </h2>
                <li className="display-x"> Istasangiz, uydan chiqmasdan onlayn tarzda darslarga qatnashasiz, istasangiz esa bizning filialimizga kelib jonli darslarda ishtirok etasiz. </li>
              </div>
              {/* Free Plan */}

              {/* Free Plan */}
              <div data-aos="fade-up" data-aos-delay="300" className="card">
              <img src={GiftIcon} className="giftIcon" />
              <h2>  Birinchi dars bepul </h2>
                <li className="display-x"> Yangi o‘quvchilar uchun tanishuv darsi mutlaqo bepul! Bu sizga kurslarimiz sifati, o‘qituvchilar yondashuvi va dars jarayonlari bilan bevosita tanishish imkonini beradi.  </li>
              </div>
              {/* Free Plan */}

              {/* Free Plan */}
              <div data-aos="fade-up" data-aos-delay="300" className="card">
              <img src={EarthIcon} className="earthicon" />
              <h2> Arab va Ingliz Tillari </h2>
                <li className="display-x"> ZIN-NUR Akademiyasida siz bir vaqtning o‘zida arab va ingliz tillarini mukammal o‘rganishingiz mumkin. Har ikki til bo‘yicha chuqur kurslar mavjud. </li>
              </div>
              {/* Free Plan */}
            </div>
          </div>
        </section>
      );
}


export default Services;