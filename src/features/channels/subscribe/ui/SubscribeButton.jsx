import React from "react"

const SubscribeButton = (props) => {

    return (
        props.isSubscribed ? (
            <button className="btn btn-sm btn-completed">Подписаны</button>
        ) : (
            <button className="btn btn-sm btn-primary">Подписаться</button>
        )
    )
}

export default React.memo(SubscribeButton)