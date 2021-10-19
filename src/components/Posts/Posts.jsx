import React from 'react'
import style from './Posts.module.css'

const Posts = () => {
    return (
        <div>
            <div className={style.posts}>
            <div className={style.wrapper}>
            <div className={style.posts__header}>
                    <p className={style.Recent}>Recent posts</p> 
                    <p className={style.view__all}>View all</p>
            </div> 

            <div className={style.page}> 
                <div className={style.posts__content}>
                    <div className={style.posts__content_block}>
                        <h3>Making a design system from scratch
                        </h3>
                        <p className={style.post__date}>12 Feb 2020</p>
                        <p className={style.post__text}>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                    <div className={style.posts__content_block}>
                        <h3>Creating pixel perfect icons in Figma</h3>
                        <p className={style.post__date}>12 Feb 2020</p>
                        <p className={style.post__text}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
            </div>
            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts
