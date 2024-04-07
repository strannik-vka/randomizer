import React from "react"

const SubscribeButton = (props) => {

    return (
        props.isSubscribed ? (
            <button className="btn btn-sm btn-completed">Подписаны</button>
        ) : (
            <a href={props.channel_link} target="_blank" className="btn btn-sm btn-primary">Подписаться</a>
        )
    )
}

export default React.memo(SubscribeButton)