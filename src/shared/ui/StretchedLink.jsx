import React from "react"
import { Link } from "react-router-dom"

const StretchedLink = (props) => {
    if (props.url) {
        return (
            <a href={props.url} className="stretched-link"></a>
        )
    }

    if (props.link) {
        return (
            <Link to={props.link} className="stretched-link" />
        )
    }
}

export default React.memo(StretchedLink)