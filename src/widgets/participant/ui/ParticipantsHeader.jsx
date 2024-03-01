import React from "react"
import declOfNum from "../../../shared/lib/declOdNum";
import AvatarImg from "../../../features/AvatarImg/ui/AvatarImg";

const ParticipantsHeader = (props) => {
    const list = Array.isArray(props.list) ? props.list : [];
    const listLimit = list.slice(0, 3);

    return (
        <header className="section section-content section-sticky">
            <div className="container">
                <div className="section-sticky-inner">
                    {list.length > 0 ? (
                        <div onClick={props.onShow} className="sticky-block">
                            <div className="sticky-block-wrapper">
                                <div className="sticky-block-group">
                                    {
                                        listLimit.map(item => (
                                            <div key={item.id} className="sticky-block-icon">
                                                <AvatarImg user_id={item.id} />
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="sticky-block-text">
                                    {props.count.toLocaleString()} {declOfNum(props.count, ['участник', 'участника', 'участников'])}
                                </div>
                                <div className="sticky-block-arrow">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M6.741 17.3732L5.32678 15.959L11.4947 9.79106L5.32678 3.62317L6.741 2.20896L14.3231 9.79106L6.741 17.3732Z"
                                            fill="currentColor" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="sticky-block pointer-events-none">
                            <div className="sticky-block-wrapper">
                                <div className="sticky-block-icon sticky-block-icon-text">
                                    🎊
                                </div>
                                <div className="sticky-block-text">
                                    Будьте первым участником!
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default React.memo(ParticipantsHeader)