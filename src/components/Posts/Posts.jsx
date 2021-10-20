import React from 'react'
import Post from './Post'
import style from './Posts.module.css'

const Posts = () => {
    return (
        <>
            <div className={style.posts}>
            <div className={style.wrapper}>
            <div className={style.posts__header}>
                    <p className={style.Recent}>Recent posts</p> 
                    <p className={style.view__all}>View all</p>
            </div> 

            <div className={style.page}> 
                <div className={style.posts__content}>
                    
                        <Post post__h1='Making a design system from scratch'
                        post__date='12 Feb 2020'
                        post__text='!! Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                        />
                        <Post post__h1='Creating pixel perfect icons in Figma' 
                        post__date='21 Jan 2021' 
                        post__text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                        />
        
            </div>
            
                    </div>
                </div>
            </div>
        </>
    )
}

export default Posts
