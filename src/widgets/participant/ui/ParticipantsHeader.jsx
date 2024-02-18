import React from "react"
import { BaseURL } from "../../../shared/api/BackendAPI";

const ParticipantsHeader = (props) => {
    const list = Array.isArray(props.list) ? props.list : [];

    return (
        <header className="section section-content section-sticky">
            <div className="container">
                <div className="section-sticky-inner">
                    <div className="sticky-block pointer-events-none">
                        <div className="sticky-block-wrapper">
                            {list.length > 0 ? <>
                                <div onClick={props.onShow} class="sticky-block-group">
                                    {
                                        list.map(item => (
                                            <div class="sticky-block-icon">
                                                <img src={BaseURL + 'getAvatar?id=' + item.id} />
                                            </div>
                                        ))
                                    }
                                </div>
                                <div onClick={props.onShow} class="sticky-block-text">
                                    {props.count} участника
                                </div>
                                <div onClick={props.onShow} class="sticky-block-arrow">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M6.741 17.3732L5.32678 15.959L11.4947 9.79106L5.32678 3.62317L6.741 2.20896L14.3231 9.79106L6.741 17.3732Z"
                                            fill="currentColor" />
                                    </svg>
                                </div>
                            </> : <>
                                <div className="sticky-block-icon sticky-block-icon-text">
                                    🎊
                                </div>
                                <div className="sticky-block-text">
                                    Будьте первым участником!
                                </div>
                            </>}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default React.memo(ParticipantsHeader)