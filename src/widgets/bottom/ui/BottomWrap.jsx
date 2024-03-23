import React from "react"

const BottomWrap = (props) => {
    return (
        <div className="bottom">
            <div className="bottom-inner">
                {props.children}
            </div>
        </div>
    )
}

export default React.memo(BottomWrap)