import ParticipantsHeader from "../widgets/participant/ui/ParticipantsHeader"
import React, { useCallback, useEffect, useState } from "react";
import { BackendAPI } from "../shared/api/BackendAPI";
import URLParam from "../shared/lib/URLParam";
import Bottom from "../widgets/bottom/ui/Bottom";
import Menu from "../widgets/menu/ui/Menu";
import ParticipantsList from "../widgets/participant/ui/ParticipantsList";
import AnimationText from "../widgets/AnimationText/ui/AnimationText";
import GiveawaysCount from "../widgets/giveaway/ui/GiveawaysCount";
import PageLayout from "../widgets/PageLayout/ui/PageLayout";

const IndexPage = (props) => {
    const giveaway_id = URLParam('giveaway_id');
    const [sponsor, setSponsor] = useState(null);
    const [joined, setJoined] = useState(false);
    const [participants, setParticipants] = useState(null);
    const [participantsCount, setParticipantsCount] = useState(0);
    const [checking, setChecking] = useState(false);
    const [participantsListShow, setParticipantsListShow] = useState(false);
    const [onJoined, setOnJoin] = useState(false);
    const [giveawayStatus, setGiveawayStatus] = useState(false);

    const getGiveawayStats = useCallback(() => {
        BackendAPI.get('getGiveawayStats', {
            giveaway_id: giveaway_id
        }).then(response => {
            setJoined(response.data?.joined);
            setParticipants(response.data?.participants);
            setParticipantsCount(response.data?.participants_count);
            setSponsor(response.data?.owner);
            setGiveawayStatus(response.data?.status);

            setChecking(false);
        }).catch(() => {
            setChecking(false);
        })
    }, [giveaway_id]);

    const onJoin = useCallback((data) => {
        setOnJoin(data.id ? (
            data.id
        ) : data.error ? (
            data.error
        ) : (
            false
        ));
    }, []);

    const onParticipantsListShow = useCallback(() => {
        setParticipantsListShow(true);
    }, [])

    const onParticipantsListHide = useCallback(() => {
        setParticipantsListShow(false);
    }, [])

    // useEffects
    useEffect(() => {
        if (onJoined) {
            setChecking(true);
        }
    }, [onJoined])

    useEffect(() => {
        if (checking) {
            getGiveawayStats()
        }
    }, [checking])

    useEffect(() => {
        if (giveaway_id) {
            setChecking(true);
        }
    }, [])

    return (
        <PageLayout preloader={props.preloader}>
            <div className="wrapper">
                {giveaway_id &&
                    <ParticipantsHeader
                        count={participantsCount}
                        list={participants}
                        onShow={onParticipantsListShow}
                    />
                }

                <main className="content">
                    <section className="section section-content section-main">
                        <div className="container">
                            <div className="section-main-inner">
                                <div className="section-main-primary">
                                    <div className="row g-3">
                                        <AnimationText
                                            checking={checking}
                                            onJoined={onJoined}
                                            joined={joined}
                                            sponsor={sponsor}
                                            giveawayStatus={giveawayStatus}
                                            giveawayId={giveaway_id}
                                        />

                                        {(props.user?.giveaways_participated > 0 && giveaway_id) &&
                                            <GiveawaysCount
                                                count={props.user.giveaways_participated}
                                            />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {giveaway_id &&
                    <Bottom
                        giveaway_id={giveaway_id}
                        onJoin={onJoin}
                        joined={joined}
                        checking={checking}
                        user={props.user}
                        sponsor={sponsor}
                        giveawayStatus={giveawayStatus}
                    />
                }

                <Menu
                    show={participantsListShow}
                    onClose={onParticipantsListHide}
                >
                    <ParticipantsList
                        list={participants}
                    />
                </Menu>
            </div>
        </PageLayout>
    )
}

export default React.memo(IndexPage)