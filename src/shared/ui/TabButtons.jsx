import React, { useState } from "react"

const TabButtons = (props) => {
    const [activeIndex, setActiveIndex] = useState(props.activeIndex || 0);

    const onClick = (index) => {
        setActiveIndex(index)

        if (props.onChange) {
            props.onChange(index)
        }
    }

    return (
        <div className="tab-block tab-block-group tab-block-horizontal">
            {
                props.list.map((item, index) => {
                    return (
                        <button
                            key={item}
                            type="button"
                            className={'tab-button ' + (activeIndex === index && 'active')}
                            onClick={() => activeIndex === index ? null : onClick(index)}
                        >{item}</button>
                    )
                })
            }
        </div>
    )
}

export default React.memo(TabButtons)