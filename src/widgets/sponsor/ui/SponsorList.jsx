import React from "react"
import SponsorCard from "./SponsorCard"

const SponsorList = (props) => {
    return (
        props.list.map(item => {
            <SponsorCard
                {...item}
            />
        })
    )
}

export default React.memo(SponsorList)