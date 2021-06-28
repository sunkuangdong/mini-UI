import React from "react";
import { scopedClassMaker } from "../helpers/classes"

const sc = scopedClassMaker("mini-layout")

interface HeaderProps extends React.HTMLAttributes<HTMLElement> { }

const Header: React.FunctionComponent<HeaderProps> = (props) => {
    const { children, className, ...restProps } = props
    return (
        <div className={sc('header', { extra: className })} {...restProps}>
            {children}
        </div>
    )
}

export default Header;