import React from 'react'
import style from './Works.module.css'
import Rectangle30 from '../images/Rectangle 30.png'
import Rectangle32 from '../images/Rectangle 32.png'
import Rectangle34 from '../images/Rectangle 34.png'

const Works = () => {
    return (
        <div>
           <div className={style.page}>
        <div className={style.featured__works}>
            <p className={style.featured__works_text}>Featured works</p>
            <div className={style.work__item}>
                <img src={Rectangle30} alt="" srcset="" />
                <div className={style.work__item_notes}>
                    <h3>
                        Designing Dashboards
                       </h3>
                       <p className={style.date__work}><span class={style.year__work}>2020</span>Dashboard</p>
                       <p className={style.work__item_text}>
                           Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. 
                       </p>
                       
                </div>
            </div>
            <hr/>
            <div className={style.work__item}>
            <img src={Rectangle32} alt="" srcset="" />
                <div className={style.work__item_notes}>
                    <h3>
                        Vibrant Portraits of 2020
                        </h3>
                        <p class={style.date__work}><span class={style.year__work}>2018</span>Illustration</p>
                        <p class={style.work__item_text}>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. 
                        </p>
                        
                </div>
                
            </div>
            <hr/>
            <div class={style.work__item}>
                <img src={Rectangle34} alt="" srcset="" />
                <div class={style.work__item_notes}>
                    <h3>
                        36 Days of Malayalam type
                        </h3>
                        <p class={style.date__work}><span class={style.year__work}>2018</span>Typography</p>
                        <p class={style.work__item_text}>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. 
                        </p>
                        
                 </div>
                </div>
                <hr/>
                </div>
            </div> 
        </div>
    )
}

export default Works
