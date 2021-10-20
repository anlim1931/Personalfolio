import React from 'react'
import style from './Works.module.css'
import Rectangle30 from '../images/Rectangle 30.png'
import Rectangle32 from '../images/Rectangle 32.png'
import Rectangle34 from '../images/Rectangle 34.png'
import Work_example from './Work_example'

const Works = () => {
    return (
        <div>
           <div className={style.page}>
        <div className={style.featured__works}>
            <p className={style.featured__works_text}>Featured works</p>
            
            <Work_example workHeader='Designing Dashboards' 
            workYear='2020' 
            workType='Dashboard'
            workText='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
            workImg={Rectangle30}
            />
            <Work_example workHeader='Vibrant Portraits of 2020!' 
            workYear='2018' 
            workType='Illustration'
            workText='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
            workImg={Rectangle32}
            />
            <Work_example workHeader='36 Days of Malayalam type' 
            workYear='2021' 
            workType='Typography'
            workText='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
            workImg={Rectangle34}
            />

                </div>
            </div> 
        </div>
    )
}

export default Works
