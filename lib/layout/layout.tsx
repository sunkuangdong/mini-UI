import React from "react"
import { scopedClassMaker } from "../helpers/classes"
import "./layout.scss"

const sc = scopedClassMaker("mini-layout")

interface LayoutProps extends React.HTMLAttributes<HTMLElement> { }

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
    const { children, className, ...restProps } = props
    return (
        <div className={sc("", { extra: className })} {...restProps}>
            {children}
        </div>
    )
}

export default Layout