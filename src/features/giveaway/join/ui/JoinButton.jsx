import React, { useEffect, useState } from "react"
import { BackendAPI } from "../../../../shared/api/BackendAPI"

const JoinButton = (props) => {
    const [joining, setJoining] = useState(false)

    const onJoin = (data) => {
        if (typeof props.onJoin === 'function') {
            if (data?.ok) {
                data.id = props.giveawayId;
            }

            props.onJoin(data);
        }
    }

    useEffect(() => {
        if (joining) {
            BackendAPI.get('join', {
                params: {
                    giveaway_id: props.giveawayId
                }
            }).then((response) => {
                setJoining(false);

                onJoin(response.data);
            }).catch((error) => {
                setJoining(false);

                onJoin(error.response.data);
            })
        }
    }, [props.giveawayId, props.onJoin, joining])

    return (props.giveawayId &&
        <button
            onClick={joining ? () => { } : () => setJoining(true)}
            className="btn btn-lg btn-primary btn-gradient w-100"
            disabled={props.checking || props.disabled}
        >
            {joining ? (
                <>
                    &nbsp;
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </>
            ) : (
                'Принять участие'
            )}
        </button>
    )
}

export default React.memo(JoinButton)