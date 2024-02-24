import React from "react";
import { BaseURL } from "../../../shared/api/BackendAPI";

const ParticipantCard = (props) => {
    return (
        <div key={props.id} className="user-card">
            <div className="user-card-wrapper">
                <div className="user-card-counter"></div>
                <div className="user-card-avatar">
                    <img src={BaseURL + 'getAvatar?id=' + props.id} />
                </div>
                <div className="user-card-content">
                    <div className="user-card-name">
                        {props.name}
                    </div>
                    <div className="user-card-description">
                        ID: <span>{props.id}</span>
                    </div>
                </div>
                <div className="user-card-actions">
                    <div className="btn btn-icon user-card-btn">
                        <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <path id="icon"
                                d="M6.74097 17.3732L5.32678 15.959L11.4946 9.79108L5.32678 3.62317L6.74097 2.20898L14.3231 9.79108L6.74097 17.3732Z"
                                fill="currentColor" fillRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
            <a href={'tg://user?id=' + props.id} className="stretched-link"></a>
        </div>
    )
}

export default React.memo(ParticipantCard);