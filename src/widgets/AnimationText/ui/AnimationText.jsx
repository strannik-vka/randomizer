import React from "react"
import Lottie from "lottie-react";
import girlAnimation from '../../../app/json/animation/invalid.json'
import welcomeAnimation from '../../../app/json/animation/welcome.json'
import successAnimation from '../../../app/json/animation/success.json'
import checkAnimation from '../../../app/json/animation/check.json'
import errorAnimation from '../../../app/json/animation/error.json'
import finishAnimation from '../../../app/json/animation/finish.json'

const AnimationText = (props) => {
    return (
        <>
            <div className="col-12">
                <div className="block-animation">
                    <Lottie
                        animationData={
                            !props.giveawayId ? (
                                errorAnimation
                            ) : props.checking ? (
                                checkAnimation
                            ) : typeof props.onJoined === 'number' ? (
                                successAnimation
                            ) : props.onJoined === 'CONDITIONS_ARE_NOT_MET' ? (
                                errorAnimation
                            ) : props.onJoined === 'IP_BLOCKED' ? (
                                successAnimation
                            ) : props.giveawayStatus == 'end' ? (
                                finishAnimation
                            ) : props.joined ? (
                                girlAnimation
                            ) : (
                                welcomeAnimation
                            )
                        }
                    />
                </div>
            </div>
            <div className="col-12">
                <div className="section-main-text text-center text-white">
                    {!props.giveawayId ? (
                        <>
                            <div className="fs-lg fw-600">Упс!</div>
                            <span className="fw-500">
                                Некорректная ссылка,<br />
                                нет параметра <b>giveawayId</b>
                            </span>
                        </>
                    ) : props.checking ? (
                        <>
                            Проверяем, выполнены ли<br />
                            все условия розыгрыша...
                        </>
                    ) : typeof props.onJoined === 'number' ? (
                        <>
                            <div className="fs-lg fw-600">Поздравляем!</div>
                            <span className="fw-500">Вы участвуете в розыгрыше</span>
                        </>
                    ) : props.onJoined === 'CONDITIONS_ARE_NOT_MET' ? (
                        <>
                            Вы выполнили не все условия<br />
                            розыгрыша, пожалуйста,<br />
                            перепроверьте условия {props.sponsor?.channel_link ? <a target="_blank" href={props.sponsor.channel_link}>в посте</a> : 'в посте'}
                        </>
                    ) : props.onJoined === 'IP_BLOCKED' ? (
                        <>
                            <div className="fs-lg fw-600">Поздравляем!</div>
                            <span className="fw-500">Вы участвуете в розыгрыше</span>
                        </>
                    ) : props.giveawayStatus === 'end' ? (
                        <>
                            <div className="fs-lg fw-600 mb-2">Розыгрыш завершен!</div>
                            <span className="fw-500 pt-1">
                                Вам обязательно повезет в следующий раз, не унывайте :)
                            </span>
                        </>
                    ) : props.joined ? (
                        <>
                            <div className="fs-lg fw-600">Упс!</div>
                            <span className="fw-500">
                                Вы уже участвуете в розыгрыше, <br />от канала
                                {props.sponsor?.channel_link ? (
                                    <a
                                        href={props.sponsor.channel_link}
                                        target="_blank"
                                    >{props.sponsor.channel_name}</a>
                                ) : (
                                    <>{props.sponsor?.channel_name}</>
                                )}
                            </span>
                        </>
                    ) : (
                        <>
                            Нажмите на кнопку ниже,<br />
                            чтобы участвовать в розыгрыше
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default React.memo(AnimationText)