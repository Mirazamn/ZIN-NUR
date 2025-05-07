import './style.css'
import '../../index.css'
import '../variable.css'

import Afzalliklar from '../../assets/images/cta.svg' 

import { FaChalkboardTeacher, FaCalendarAlt, FaGlobe } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";



function Features() {
    return (
        <div className="container-fluid bg-primary feature py-5 my-5">
        <div id="afazlliklar" className="container py-5">
          <div className="mx-auto text-center mb-3 pb-2" style={{ maxWidth: "500px" }}>
            <h6 className="text-uppercase text-secondary">Afzalliklarimiz</h6>
            <h1 className="display-5 text-white">Ustunliklarimiz</h1>
          </div>

          <div className="row g-5">
            <div className="col-lg-3">
              <div className="text-white mb-5">
                <div
                  className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3 icon-box"
                >
                  <div className="icon-wrapper">
                    <FaChalkboardTeacher />
                  </div>
                </div>
                <h4 className="text-white">15+ yillik tajriba</h4>
                <p className="mb-0">
                    Bizning ustozlarimiz o‘z sohasida ko‘p yillik tajribaga ega bo‘lib, har bir o‘quvchining darajasiga mos yondashadi.
                </p>
              </div>
              <div className="text-white">
                <div
                  className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3 icon-box"
                >
                 <div className="icon-wrapper">
                    <FaGift />
                  </div>
                </div>
                <h4 className="text-white">Birinchi dars – bepul</h4>
                <p className="mb-0">
                O‘quvchilar birinchi darsda hech qanday to‘lovsiz qatnashib, metodikamizni sinab ko‘rishlari mumkin.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-white h-100 text-center p-5">
                <p className='par'>
                ZIN-NUR Akademiyasi nafaqat til o‘rgatadi, balki har bir o‘quvchining muvaffaqiyatini ta’minlash uchun chuqur yondashuvni taklif etadi. Tajribali ustozlar, zamonaviy metodika, moslashuvchan dars jadvali va ikki tilda o‘qitish — bularning barchasi sizning rivojlanishingiz uchun yaratilgan. Bizda o‘qish qulay, natijalar esa aniq va barqaror.
                </p>
                <img
                  className="img-fluid rounded-20"
                  src={Afzalliklar}
                  alt="Afzalliklar rasm"
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-white mb-5">
                <div
                  className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3 icon-box"
                >
                  <div className="icon-wrapper">
                    <FaCalendarAlt />
                  </div>
                </div>
                <h4 className="text-white">Moslashuvchan o‘qish vaqtlari</h4>
                <p className="mb-0">
                O‘quvchilar o‘zlariga qulay vaqtni tanlab, o‘qishni ish yoki o‘qish bilan birga olib borishlari mumkin.
                </p>
              </div>
              <div className="text-white">
                <div
                  className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3 icon-box"
                >
                  <div className="icon-wrapper">
                    <FaGlobe />
                  </div>
                </div>
                <h4 className="text-white">Onlayn va offlayn o‘qish imkoniyati</h4>
                <p className="mb-0">
                Istalgan joydan o‘qish imkoniyati mavjud. Shuningdek, akademiya binosida jonli darslarda qatnashish ham mumkin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Features;