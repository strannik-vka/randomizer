import React from "react"

const SponsorCard = (props) => {
    return (
        <div className="col-12">
            <div className="card-link">
                <div className="row g-4 align-items-center">
                    <div className="col-auto">
                        <div className="card-link-icon">
                            <img src={props.logo} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="card-link-content">
                            <div className="row g-1 align-items-start">
                                <div className="col-12">
                                    <div className="card-link-title">
                                        <span className="card-link-name text-black fw-600">
                                            {props.name}
                                        </span>
                                        <span className="card-link-ref">
                                            <svg width="18.000000" height="18.000000" viewBox="0 0 18 18"
                                                fill="none" xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path
                                                    d="M2 0C0.895432 0 0 0.895416 0 2L0 16C0 17.1046 0.895432 18 2 18L16 18C17.1046 18 18 17.1046 18 16L18 10L16 10L16 15C16 15.5523 15.5523 16 15 16L3 16C2.44771 16 2 15.5523 2 15L2 3C2 2.44772 2.44771 2 3 2L8 2L8 0L2 0ZM9.66663 1.03366L16.965 1L17 8.10474L14.0346 5.24545L7.71986 11.3344L6.28014 9.94614L12.5949 3.85721L9.66663 1.03366Z"
                                                    fill="currentColor" fillOpacity="0.200000"
                                                    fillRule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card-link-description">
                                        Организатор розыгрыша
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href={props.url} className="stretched-link" target="_blank"></a>
            </div>
        </div>
    )
}

export default React.memo(SponsorCard)