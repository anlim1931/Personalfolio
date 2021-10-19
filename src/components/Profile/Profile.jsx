import React from 'react'
import logo from '../images/Ellipse 1.png';
import style from '../Profile/Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div className={style.wrapper}>
                <main className={style.page}>
                <div className="about">
                        <div className={style.hello}>
                            <div className={style.hello__content}>
                                <h1>Hi, I am John,
                                    Creative Technologist</h1>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                            <div className="hello_avatar">
                                <img src={logo} alt="" srcset="" />
                            </div>
                    </div>
                    
                        <div className={style.download__btn}>
                            <a href="#">Download Resume</a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Profile
