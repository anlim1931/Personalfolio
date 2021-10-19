import React from 'react'
import style from './Footer.module.css'
import fb from '../images/fb.png'
import insta from '../images/insta.png'
import twitter from '../images/Vector.png'
import linkedin from '../images/Linkedin.png'


const Footer = () => {
    return (
        <div>
            <footer class="footer">
            <div class={style.footer__content}>
                <nav class="footer__nav">
                    <ul class={style.footer__ul}>
                        <li class={style.footer__nav_inner}><a href="#" class={style.footer__nav_item}>
                            <img src={fb} alt="" srcset="" />
                        </a>
                        </li>
                        <li class={style.footer__nav_inner}><a href="#" class={style.footer__nav_item}>
                            <img src={insta} alt="" srcset="" />
                        </a></li>
                        <li class={style.footer__nav_inner}><a href="#" class={style.footer__nav_item}>
                            <img src={twitter} alt="" srcset="" />
                        </a></li>
                        <li class={style.footer__nav_inner}><a href="#" class={style.footer__nav_item}>
                            <img src={linkedin} alt="" srcset="" />
                        </a></li>
                    </ul>
                </nav>
                <div class="copyright__inner">
                    <p class={style.copyright}>
                        Copyright ©2020 All rights reserved 
                    </p>
                </div>
            </div>
        </footer>
        </div>
    )
}

export default Footer
