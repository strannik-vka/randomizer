import React, { useEffect, useState } from "react"
import PageLayout from "../widgets/PageLayout/ui/PageLayout"
import { useParams } from "react-router-dom";
import { BackendAPI } from "../shared/api/BackendAPI"
import GiveawayWinnerSlider from "../widgets/giveaway/ui/GiveawayWinnerSlider";
import ParticipantCard from "../widgets/participant/ui/ParticipantCard";

const GiveawayPage = (props) => {
    const [giveaway, setGiveaway] = useState(null);

    let { giveawayId } = useParams();

    useEffect(() => {
        if (giveawayId) {
            BackendAPI.get('getGiveawayStats', {
                params: {
                    giveaway_id: giveawayId
                }
            }).then(response => {
                setGiveaway(response.data)
            });
        }
    }, [giveawayId])

    return (giveaway?.ok &&
        <PageLayout preloader={props.preloader}>
            <div className="wrapper">
                <main className="content">
                    <section className="section section-content section-main">
                        <div className="container">
                            <div className="section-main-inner">
                                <div className="section-main-primary">
                                    <GiveawayWinnerSlider giveaway={giveaway} />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <div className="bottom">
                    <div className="bottom-inner">
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="user-list user-list-winner">
                                    {
                                        giveaway.participants.map(item => (
                                            <ParticipantCard
                                                key={item.id}
                                                {...item}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default React.memo(GiveawayPage)