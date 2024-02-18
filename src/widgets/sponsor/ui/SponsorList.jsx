import React from "react"
import SponsorCard from "./SponsorCard"

const SponsorList = (props) => {
    return (
        props.list.map((item, i) =>
            <SponsorCard
                key={i}
                {...item}
            />
        )
    )
}

export default React.memo(SponsorList)