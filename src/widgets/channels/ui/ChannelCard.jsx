import React from "react"
import styles from '../../../app/scss/widgets/channels/card.module.scss';
import AvatarImg from "../../../features/AvatarImg/ui/AvatarImg";
import SubscribeButton from "../../../features/channels/subscribe/ui/SubscribeButton";

const ChannelCard = (props) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.media}>
                <div className={styles.imageWrap}>
                    <AvatarImg channel_id={props.channel_id} />
                </div>
                <div className={styles.name}>{props.channel_name}</div>
            </div>
            <div className={styles.action}>
                <SubscribeButton {...props} />
            </div>
        </div>
    )
}

export default React.memo(ChannelCard)