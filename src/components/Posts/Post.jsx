import React from 'react'
import style from './Post.module.css'

function Post(props) {
    return (
        <>
            <div className={style.posts__content_block}>
                <h3>{props.post__h1}</h3>
                <p className={style.post__date}>{props.post__date}</p>
                <p className={style.post__text}>
                    {props.post__text}
                </p>
            </div>
        </>
    )
}

export default Post
