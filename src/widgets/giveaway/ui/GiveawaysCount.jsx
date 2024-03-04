import React from "react"
import declOfNum from "../../../shared/lib/declOdNum"
import { Link } from "react-router-dom"
import { route } from "../../../entities/route/lib"

const GiveawaysCount = (props) => {
    return (
        <div className="col-12" style={{ marginTop: '2.875rem' }}>
            <div className="container">
                <div className="badge">
                    <div className="badge-wrapper">
                        <div className="badge-description">
                            Я уже участвую в <span>{props.count}</span> {declOfNum(props.count, ['розыгрыше', 'розыгрышах', 'розыгрышах'])}
                        </div>
                        <div className="badge-actions">
                            <svg width="20.000000" height="20.000000" viewBox="0 0 20 20"
                                fill="none" xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                <path id="icon"
                                    d="M6.74072 17.3732L5.32666 15.959L11.4946 9.79106L5.32666 3.62317L6.74072 2.20895L14.3228 9.79106L6.74072 17.3732Z"
                                    fill="currentColor" fillOpacity="0.850000"
                                    fillRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <Link to={route('MyGiveaways')} className="stretched-link"></Link>
                </div>
            </div>
        </div>
    )
}

export default React.memo(GiveawaysCount)