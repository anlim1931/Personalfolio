import React from 'react'
import style from './Work_example.module.css'


const Work_example = (props) => {
    return (
        <>
           <div className={style.work__item}>
                <img src={props.workImg} alt=""/>
                <div className={style.work__item_notes}>
                    <h3>
                        {props.workHeader}
                    </h3>
                       <p className={style.date__work}><span class={style.year__work}>{props.workYear}</span>{props.workType}</p>
                       <p className={style.work__item_text}>
                            {props.workText} 
                       </p>
                       
                </div>
            </div>
            <hr/> 
        </>
    )
}

export default Work_example
