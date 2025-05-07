import './style.css'
import '../../index.css'
import '../variable.css'

import { LogoLight } from '../../assets/plan'
import { IoMenuSharp } from "react-icons/io5";


function Navbar() {
    return(
        <nav>
            <ul className='container desktop flex'>
                <li>
                    <a href="">Asosiy</a>
                </li>
                <li>
                    <a href="">Biz haqimizda</a>
                </li>
                <li>
                    <a href="">Xizmatlar</a>
                </li>
                <li>
                    <a href="">Afzalliklar</a>
                </li>
                <li>
                    <a href="">Mahsulotlar</a>
                </li>
                <li>
                    <a href="">Yangiliklar</a>
                </li>
                <li>
                    <a href="">Bog'lanish</a>
                </li>
            </ul>

            <ul className='container mobile flex'>
                <img src={LogoLight} alt="" />

                <IoMenuSharp className='menu'/>
            </ul>
        </nav>
    )
}


export default Navbar;