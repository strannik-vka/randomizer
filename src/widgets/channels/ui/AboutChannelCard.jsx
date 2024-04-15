import React from "react"
import AvatarImg from "../../../features/AvatarImg/ui/AvatarImg";

const AboutChannelCard = (props) => {
    return (
        <div className="draw-card">
            <div className="draw-card-wrapper">
                <div className="draw-card-avatar">
                    <AvatarImg channel_id={props.channel_id} />
                </div>
                <div className="draw-card-content">
                    <div className="draw-card-name">
                        {props.channel_name}
                    </div>

                    {props.channel_link &&
                        <div className="draw-card-link">
                            <span>Подробнее</span>
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path id="icon"
                                        d="M5.39355 13.8986L4.26172 12.7672L9.19629 7.83289L4.26172 2.89856L5.39355 1.76721L11.459 7.83289L5.39355 13.8986Z"
                                        fill="currentColor" fillOpacity="1" fillRule="evenodd" />
                                </svg>
                            </span>
                        </div>
                    }
                </div>
            </div>
            {props.channel_link && (
                <a target="_blank" href={props.channel_link} className="stretched-link"></a>
            )}
        </div>
    )
}

export default React.memo(AboutChannelCard)