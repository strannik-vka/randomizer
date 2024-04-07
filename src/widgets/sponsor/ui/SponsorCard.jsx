import React from "react"
import AvatarImg from "../../../features/AvatarImg/ui/AvatarImg"
import styles from "../../../app/scss/widgets/sponsor/card.module.scss"
import { Link } from "react-router-dom"
import { route } from "../../../entities/route/lib"

const SponsorCard = (props) => {
    return (props.id &&
        <div className={styles.wrap}>
            <a href={props.url ? props.url : 'javascript://'} target={props.url ? '_blank' : '_self'} className={styles.sponsor}>
                <div className={styles.avatarWrap}>
                    <AvatarImg channel_id={props.id} />
                </div>
                <div className={styles.info}>
                    <div className={styles.nameWrap}>
                        <div className={styles.name}>{props.name}</div>
                        {props.url &&
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.46664 1.42352L12.5755 1.39995L12.6 6.37326L7.46664 1.42352Z" fill="black" fillOpacity="0.2" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.09609 7.66225L10.2294 2.7125L11.2372 3.68427L6.1039 8.63401L5.09609 7.66225Z" fill="black" fillOpacity="0.2" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.699997 2.09995C0.699997 1.32675 1.3268 0.699951 2.1 0.699951H6.3V2.09995H2.8C2.4134 2.09995 2.1 2.41335 2.1 2.79995V11.2C2.1 11.5866 2.4134 11.9 2.8 11.9H11.2C11.5866 11.9 11.9 11.5866 11.9 11.2V7.69995H13.3V11.9C13.3 12.6732 12.6732 13.3 11.9 13.3H2.1C1.3268 13.3 0.699997 12.6732 0.699997 11.9V2.09995Z" fill="black" fillOpacity="0.2" />
                            </svg>
                        }
                    </div>
                    <div className={styles.description}>Организатор</div>
                </div>
            </a>

            {props?.user?.id &&
                <Link to={route('profile')} className={styles.account}>
                    <div className={styles.avatarWrap}>
                        <AvatarImg user_id={props.user.id} />
                    </div>
                    <div className={styles.description}>Мой аккаунт</div>
                </Link>
            }
        </div>
    )
}

export default React.memo(SponsorCard)