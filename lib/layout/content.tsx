import React from "react";
import { scopedClassMaker } from "../helpers/classes"

const sc = scopedClassMaker("mini-layout")

interface ContentProps extends React.HTMLAttributes<HTMLElement> { }
const Content: React.FunctionComponent<ContentProps> = (props) => {
    const { children, className, ...restProps } = props
    return (
        <div className={sc("content", { extra: className })} {...restProps}>
            {children}
        </div>
    )
}

export default Content;