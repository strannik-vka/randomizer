import React, { useEffect, useState } from "react"
import PageLayout from "../widgets/PageLayout/ui/PageLayout"
import { Link, useParams } from "react-router-dom";
import { BackendAPI } from "../shared/api/BackendAPI"
import GiveawayWinnerSlider from "../widgets/giveaway/ui/GiveawayWinnerSlider";
import ParticipantCard from "../widgets/participant/ui/ParticipantCard";
import { route } from "../entities/route/lib";

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

    const winnerUsers = giveaway?.ok ? giveaway.participants.filter((item) => item.is_winner) : [];

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

                {winnerUsers.length > 3 &&
                    <div className="bottom">
                        <div className="bottom-inner">
                            <div className="row g-4">
                                <div className="col-12">
                                    <Link
                                        to={route('giveaways')}
                                        className="btn btn-lg btn-light w-100"
                                    >Все розыгрыши</Link>
                                </div>
                                <div className="col-12 mt-5">
                                    <div className="user-list user-list-winner">
                                        {
                                            winnerUsers.map((item, index) => (index > 2 &&
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
                }
            </div>
        </PageLayout>
    )
}

export default React.memo(GiveawayPage)