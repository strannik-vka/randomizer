import React from "react"
import { Link } from "react-router-dom"
import { route } from "../../../entities/route/lib"
import AvatarImg from "../../../features/AvatarImg/ui/AvatarImg"

const UserBadge = (props) => {
    return (
        <div className="user-badge">
            <div className="user-badge-wrapper">
                {props.count &&
                    <div className="user-badge-counter"></div>
                }
                <div className="user-badge-avatar">
                    <AvatarImg user_id={props.user.id} />
                </div>
                <div className="user-badge-content">
                    <div className="user-badge-name">
                        {props.user.name}
                    </div>
                    <div className="user-badge-description">
                        <div className="user-status">
                            <div className="user-status-wrapper">
                                <span>{props.user.status.icon}</span>
                                <span>{props.user.status.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="user-badge-actions">
                    <div className="btn btn-icon user-badge-btn">
                        <svg width="32.000000" height="32.000000" viewBox="0 0 32 32" fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink">
                            <path id="icon"
                                d="M10.7856 27.7971L8.52295 25.5343L18.3916 15.6657L8.52295 5.79706L10.7856 3.5343L22.917 15.6657L10.7856 27.7971Z"
                                fill="currentColor" fillOpacity="0.250000" fillRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
            <Link to={route('profile')} className="stretched-link" />
        </div>
    )
}

export default React.memo(UserBadge)