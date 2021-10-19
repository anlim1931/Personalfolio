import React from 'react'
import style from './Header.module.css'

const Header = () => {
    return (
        <div>
            <div className={style.wrapper}>
                <div className="header">
                    <div className="header__content">
                        <nav className="menu">
                        <ul className={style.menu__list}>
                        <li><a href="" className="menu__link">Works</a></li>
                        <li><a href="" className="menu__link">Blog</a></li>
                        <li><a href="" className="menu__link">Contact</a></li>
                    </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default Header;