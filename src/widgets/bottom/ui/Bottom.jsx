import React from "react"
import SponsorList from "../../sponsor/ui/SponsorList"
import JoinButton from "../../../features/giveaway/join/ui/JoinButton"

const Bottom = (props) => {


    return (
        <div className="bottom">
            <div className="bottom-inner">
                <div className="row g-4">
                    <div className="col-12">
                        <JoinButton
                            giveaway_id={props.giveaway_id}
                            onJoin={props.onJoin}
                            joined={props.joined}
                        />
                    </div>
                    <div className="col-12">
                        <div className="devider devider-horizontal"></div>
                    </div>
                    <SponsorList
                        list={[
                            {
                                name: 'VK Music Bot',
                                logo: 'https://edabook.ru/webapp/public/assets/images/elements/card/link/demo.png',
                                url: ''
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default React.memo(Bottom)