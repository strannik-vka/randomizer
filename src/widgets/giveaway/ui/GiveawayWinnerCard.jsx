import React from "react"
import goldImage from '../../../app/assets/images/elements/cup/gold.png'
import silverImage from '../../../app/assets/images/elements/cup/silver.png'
import bronzeImage from '../../../app/assets/images/elements/cup/bronze.png'
import { BaseURL } from "../../../shared/api/BackendAPI"
import moment from "moment"

const GiveawayWinnerCard = (props) => {
    const images = [goldImage, silverImage, bronzeImage]
    const user = props.giveaway.participants[props.index];

    return (user?.id &&
        <div className="winner-card">
            <div className="winner-card-wrapper">
                <div className="winner-card-tags">
                    <div className="tag">
                        Участников: <b>{props.giveaway.participants_count.toLocaleString()}</b>
                    </div>
                    <div className="tag">
                        Призовых мест: <b>{props.giveaway.winners_count}</b>
                    </div>
                    {props.giveaway.deadline.type == 'time' &&
                        <div className="tag">
                            Завершен: <b>{moment(props.giveaway.deadline.time * 1000).format('DD.MM.YYYY в HH:mm')}</b>
                        </div>
                    }
                </div>
                <div className="winner-card-image">
                    <img src={images[props.index]} />
                </div>
                <div className="winner-card-content">
                    <div className="winner-badge winner-badge-glass">
                        <div className="winner-badge-avatar">
                            <img src={BaseURL + 'getAvatar?id=' + user.id} />
                        </div>
                        <div className="winner-badge-content">
                            <div className="winner-badge-name">
                                {user.name}
                            </div>
                            <div className="winner-badge-description">
                                {props.index == 0 ? (
                                    'Победитель розыгрыша'
                                ) : props.index == 1 ? (
                                    'Второе место'
                                ) : (
                                    'Третье место'
                                )}
                            </div>
                        </div>
                        <a href={'tg://user?id=' + user.id} className="stretched-link"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(GiveawayWinnerCard)