import React from "react"
import JoinButton from "../../../features/giveaway/join/ui/JoinButton"
import IdButton from "../../../features/giveaway/IdButton/ui/IdButton"
import SponsorCard from "../../sponsor/ui/SponsorCard"

const Bottom = (props) => {
    return (
        <div className="bottom">
            <div className="bottom-inner">
                <div className="row g-4">
                    <div className="col-12">
                        {props.joined && props.participantId ?
                            <IdButton
                                id={props.participantId}
                            />
                            :
                            <JoinButton
                                {...props}
                            />
                        }

                    </div>
                    <div className="col-12">
                        <div className="devider devider-horizontal"></div>
                    </div>
                    {props.joined && props.participantId ?
                        <p className="mb-0 text-center text-blue">
                            Это ваш ID участника розыгрыша,
                            в случае победы, бот свяжется с вами,
                            поэтому, не рекомендуем отключать
                            уведомления или блокировать бота
                        </p>
                        :
                        <SponsorCard
                            id={props.sponsor?.channel_id}
                            name={props.sponsor?.channel_name}
                            url={props.sponsor?.channel_link}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default React.memo(Bottom)