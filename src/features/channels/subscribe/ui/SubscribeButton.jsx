import React, { useEffect, useState } from "react"

const SubscribeButton = (props) => {
    const [onClick, setOnClick] = useState(false);

    useEffect(() => {
        if (onClick) {
            if (props.onSubscribe) {
                props.onSubscribe();
            }
        }
    }, [onClick])

    return (
        (props.isSubscribed || onClick) ? (
            <button className="btn btn-sm btn-completed">Подписаны</button>
        ) : (
            <a onClick={() => setOnClick(true)} href={props.channel_link} target="_blank" className="btn btn-sm btn-primary">Подписаться</a>
        )
    )
}

export default React.memo(SubscribeButton)