import React, { useCallback, useEffect, useState } from "react";
import ChannelCard from "./ChannelCard";
import styles from '../../../app/scss/widgets/channels/list.module.scss';

const ChannelList = (props) => {
    const [onSubscribeCount, setOnSubscribeCount] = useState(0);

    const onSubscribe = useCallback(() => {
        setOnSubscribeCount(onSubscribeCount + 1);
    }, [onSubscribeCount]);

    useEffect(() => {
        if (Array.isArray(props.list)) {
            const unSubscribeList = props.list.filter(item => !item.isSubscribed);

            if (onSubscribeCount === unSubscribeList.length) {
                if (props.onSubscribeAll) {
                    props.onSubscribeAll();
                }
            }
        }
    }, [onSubscribeCount, props.list])

    return (Array.isArray(props.list) &&
        <div className={styles.wrap}>
            <div className={styles['body-wrap']}>
                <div className={styles.body}>
                    {
                        props.list.map(item => (
                            <ChannelCard key={item.id} {...item} onSubscribe={onSubscribe} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default React.memo(ChannelList);