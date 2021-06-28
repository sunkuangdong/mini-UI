import React from "react";
import { scopedClassMaker } from "../helpers/classes"

const sc = scopedClassMaker("mini-layout")

interface FooterProps extends React.HTMLAttributes<HTMLElement> { }
const Footer: React.FunctionComponent<FooterProps> = (props) => {
    const { children, className, ...restProps } = props
    return (
        <div className={sc("footer", { extra: className })} {...restProps}>
            {children}
        </div>
    )
}

export default Footer;