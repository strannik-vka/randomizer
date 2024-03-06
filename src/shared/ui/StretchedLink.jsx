import React from "react"

const StretchedLink = (url) => {
    return (
        <a href={url} className="stretched-link"></a>
    )
}

export default React.memo(StretchedLink)