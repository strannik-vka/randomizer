import React, { useEffect, useState } from "react"
import { BackendAPI } from "../../../../shared/api/BackendAPI"

const JoinButton = (props) => {
    const [joining, setJoining] = useState(false)

    useEffect(() => {
        if (joining) {
            BackendAPI.get('join', {
                giveaway_id: props.giveaway_id
            }).then(() => {
                setJoining(false);

                if (typeof props.onJoin === 'function') {
                    props.onJoin();
                }
            }).catch(() => {
                setJoining(false);
            })
        }
    }, [props.giveaway_id, props.onJoin, joining])

    return (props.giveaway_id &&
        <button
            onClick={joining ? () => { } : () => setJoining(true)}
            className="btn btn-lg btn-primary btn-gradient w-100"
            disabled={props.checking}
        >
            {joining ? 'Подождите..' : 'Принять участие'}
        </button>
    )
}

export default React.memo(JoinButton)