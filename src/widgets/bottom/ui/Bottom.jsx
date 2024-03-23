import React from "react"
import JoinButton from "../../../features/giveaway/join/ui/JoinButton"
import IdButton from "../../../features/giveaway/IdButton/ui/IdButton"
import SponsorCard from "../../sponsor/ui/SponsorCard"
import UserBadge from "./UserBadge"

const Bottom = (props) => {
    return (
        <div className="bottom">
            <div className="bottom-inner">
                <div className="row g-4">
                    <div className="col-12">
                        {props.giveawayStatus == 'end' && props.user?.id ? (
                            <UserBadge
                                user={props.user}
                            />
                        ) : props.joined && props.user?.id ? (
                            <IdButton
                                id={props.user.id}
                            />
                        ) : (
                            <JoinButton
                                {...props}
                            />
                        )}
                    </div>
                    <div className="col-12">
                        <div className="devider devider-horizontal"></div>
                    </div>
                    <div className="col-12">
                        {props.giveawayStatus == 'end' ? (
                            <p className="m-0 text-center text-blue fw-600 fs-5">
                                Посмотрите дополнительную <br />
                                информацию вашего профиля <br />
                                в личном кабинете☝️
                            </p>
                        ) : props.joined && props.user?.id ? (
                            <p className="m-0 text-center text-blue">
                                Это ваш ID участника розыгрыша,
                                в случае победы, бот свяжется с вами,
                                поэтому, не рекомендуем отключать
                                уведомления или блокировать бота
                            </p>
                        ) : (
                            <SponsorCard
                                id={props.sponsor?.channel_id}
                                name={props.sponsor?.channel_name}
                                url={props.sponsor?.channel_link}
                                user={props.user}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Bottom)