import './style.css'
import '../../index.css'
import '../variable.css'

import { Logo } from '../../assets/plan';
import { FaPhoneAlt, FaInstagram, FaYoutube, FaTelegramPlane } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";


function Header() {
    return (
        <header> 
            <div className="container flex">
                <a className='flex phone' href="+998900482255">
                    <FaPhoneAlt />
                    +998 90 048 22 55
                </a>

                <img src={Logo} className="logo" />

                <div className="social flex">
                    <select name="lang" id="">
                        <option value="ru">Русский</option>
                        <option value="en">English</option>
                        <option value="uz">O'zbek tili</option>
                    </select>

                    <a target='_blank' href="https://www.instagram.com/zinnur_akademiyasi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"><FaInstagram className='icon'/></a>
                    <a target='_blank' href="https://www.youtube.com/@ZinNurAkademiyasi"><FaYoutube className='icon' /></a>
                    <a target='_blank' href="https://t.me/zinnur_akademiyasi"><FaTelegramPlane className='icon' /></a>
                    <a target='_blank' href="https://www.threads.com/@zinnur_akademiyasi"><FaThreads className='icon' /></a>

                    
                </div>
            </div>
        </header>
    )
}


export default Header;