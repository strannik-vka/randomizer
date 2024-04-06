import React from "react";
import ChannelCard from "./ChannelCard";
import styles from '../../../app/scss/widgets/channels/list.module.scss';

const ChannelList = (props) => {
    return (Array.isArray(props.list) &&
        <div className={styles.wrap}>
            <div className={styles['body-wrap']}>
                <div className={styles.body}>
                    {
                        props.list.map(item => (
                            <ChannelCard key={item.id} {...item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default React.memo(ChannelList);