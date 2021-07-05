import React from "react";
import Button from "./button";

const ButtonExample: React.FunctionComponent = () => {
    const onClock = () => {
        console.log("onClock")
    }
    return (
        <Button level="important" onClick={() => onClock()}>click</Button>
    )
}

export default ButtonExample