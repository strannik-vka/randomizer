import React from "react";
import Preloader from "../../../shared/ui/Preloader";
import Hint from "../../../shared/ui/Hint";
import Tooltip from "../../../shared/ui/Tooltip";

const PageLayout = (props) => {
    return (
        <>
            <Preloader show={props.preloader} />

            {props.children}

            <Hint />
            <Tooltip />
        </>
    )
}

export default React.memo(PageLayout);