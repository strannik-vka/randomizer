import React from "react";
import ParticipantCard from "./ParticipantCard";

const ParticipantsList = (props) => {
    const list = Array.isArray(props.list) ? props.list : [];

    return (
        <div className="user-list">
            {
                list.map(item => (
                    <ParticipantCard
                        key={item.id}
                        {...item}
                    />
                ))
            }
        </div>
    )
}

export default React.memo(ParticipantsList);