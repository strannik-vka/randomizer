import ParticipantsHeader from "../widgets/participant/ui/ParticipantsHeader"
import React, { useCallback, useEffect, useState } from "react";
import { BackendAPI } from "../shared/api/BackendAPI";
import Menu from "../widgets/menu/ui/Menu";
import ParticipantsList from "../widgets/participant/ui/ParticipantsList";
import AnimationText from "../widgets/AnimationText/ui/AnimationText";
import PageLayout from "../widgets/PageLayout/ui/PageLayout";
import { Link, useParams } from "react-router-dom";
import ChannelList from "../widgets/channels/ui/ChannelList";
import BottomWrap from "../widgets/bottom/ui/BottomWrap";
import SponsorCard from "../widgets/sponsor/ui/SponsorCard";
import JoinButton from "../features/giveaway/join/ui/JoinButton";
import IdButton from "../features/giveaway/IdButton/ui/IdButton";
import Timer from "../widgets/timer/ui/Timer";
import UserBadge from "../widgets/bottom/ui/UserBadge";
import { route } from "../entities/route/lib";

const JoinPage = (props) => {
    let { giveawayId } = useParams();

    const [sponsor, setSponsor] = useState(null);
    const [joined, setJoined] = useState(false);
    const [joinBtnDisabled, setJoinBtnDisabled] = useState(false);
    const [participants, setParticipants] = useState(null);
    const [participantsCount, setParticipantsCount] = useState(0);
    const [checking, setChecking] = useState(false);
    const [participantsListShow, setParticipantsListShow] = useState(false);
    const [onJoined, setOnJoin] = useState(false);
    const [giveawayStatus, setGiveawayStatus] = useState(false);
    const [deadlineTime, setDeadlineTime] = useState(false);
    const [subscribeList, setSubscribeList] = useState(false);

    const getGiveawayStats = useCallback(() => {
        if (giveawayId) {
            setTimeout(() => {
                BackendAPI.get('getGiveawayStats', {
                    params: {
                        giveaway_id: giveawayId,
                        onJoined: onJoined
                    }
                }).then(response => {
                    setJoined(response.data?.joined);
                    setParticipants(response.data?.participants);
                    setParticipantsCount(response.data?.participants_count);
                    setSponsor(response.data?.owner);
                    setGiveawayStatus(response.data?.status);

                    if (response.data?.deadline?.time) {
                        setDeadlineTime(response.data.deadline.time);
                    }

                    if (response.data?.channels) {
                        const subscribeList = response.data.channels.map((item) => {
                            if (response.data?.subscription_status) {
                                if (typeof response.data.subscription_status[item.channel_id] !== 'undefined') {
                                    item.isSubscribed = response.data.subscription_status[item.channel_id];
                                }
                            }

                            return item
                        });

                        if (response.data?.owner) {
                            let owner = response.data.owner;

                            if (response.data?.subscription_status) {
                                if (typeof response.data.subscription_status[owner.channel_id] !== 'undefined') {
                                    owner.isSubscribed = response.data.subscription_status[owner.channel_id];
                                }
                            }

                            subscribeList.push(owner);
                        }

                        setSubscribeList(subscribeList);
                    }

                    setChecking(false);
                }).catch(() => {
                    setChecking(false);
                })
            }, 2500)
        }
    }, [giveawayId, onJoined]);

    const onJoin = useCallback((data) => {
        if (data?.error == 'CONDITIONS_ARE_NOT_MET') {
            setJoinBtnDisabled(true);
        }

        if (data.id) {
            setJoined(true);
        }

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

    const onSubscribeAll = useCallback(() => {
        setJoinBtnDisabled(false);
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
        if (giveawayId) {
            setChecking(true);
        }
    }, [])

    return (
        <PageLayout preloader={props.preloader}>
            <div className="wrapper">
                {giveawayId &&
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
                                        {(deadlineTime && joined) &&
                                            <div style={{
                                                position: 'relative',
                                                marginTop: 0
                                            }}>
                                                <div style={{
                                                    position: 'absolute',
                                                    right: '0.5rem',
                                                    top: '0.5rem'
                                                }}>
                                                    <Timer time={deadlineTime} />
                                                </div>
                                            </div>
                                        }

                                        <AnimationText
                                            isMeParticipant={joined}
                                            checking={checking}
                                            onJoined={onJoined}
                                            joined={joined}
                                            sponsor={sponsor}
                                            giveawayStatus={giveawayStatus}
                                            giveawayId={giveawayId}
                                        />

                                        {!joined &&
                                            <div className="col-12" style={{ marginTop: '1.875rem' }}>
                                                <ChannelList
                                                    list={subscribeList}
                                                    onSubscribeAll={onSubscribeAll}
                                                />
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {giveawayId &&
                    <BottomWrap>
                        {giveawayStatus === 'end' ? (
                            <>
                                <UserBadge
                                    user={props.user}
                                />
                                <div className="devider devider-horizontal mt-5"></div>
                                <div className="mt-5" style={{
                                    fontWeight: 500,
                                    fontSize: '1.12rem',
                                    textAlign: 'center',
                                    color: '#8696bb'
                                }}>
                                    Посмотрите дополнительную<br />
                                    информацию вашего профиля<br />
                                    в личном кабинете☝️
                                </div>
                                <Link
                                    to={route('giveaway/' + giveawayId)}
                                    className="btn btn-lg btn-primary btn-gradient w-100 mt-5"
                                >Смотреть победителей</Link>
                            </>
                        ) : (
                            <>
                                {joined ? <>
                                    <IdButton
                                        id={props.user.id}
                                    />
                                    <div className="mt-1 text-center text-blue">Это ваш ID участника, сохраните</div>
                                    <div className="devider devider-horizontal mt-5 mb-5"></div>
                                    <Link
                                        to={route('giveaway-about/' + giveawayId)}
                                        className="btn btn-lg btn-primary btn-gradient w-100 mb-5"
                                    >Подробнее о розыгрыше</Link>
                                </> : <>
                                    <JoinButton
                                        checking={checking}
                                        disabled={joinBtnDisabled}
                                        giveawayId={giveawayId}
                                        onJoin={onJoin}
                                    />
                                    <div style={{ height: '0.625rem' }}></div>
                                </>}

                                <SponsorCard
                                    id={sponsor?.channel_id}
                                    name={sponsor?.channel_name}
                                    url={sponsor?.channel_link}
                                    user={props.user}
                                />
                            </>
                        )}
                    </BottomWrap>
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

export default React.memo(JoinPage)