import React, { ReactElement } from "react"
import "./layout.scss"
import { scopedClassMaker } from "../helpers/classes"
import Aside from "./aside"

const sc = scopedClassMaker("mini-layout")

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
    const { children, className, ...restProps } = props
    const childrenAsideArray = (children as Array<ReactElement>)
    const hasAside = 'length' in childrenAsideArray &&
        childrenAsideArray.reduce((result, node) =>
            result || node.type === Aside
            , false)
    return (
        <div className={sc({ "": true, hasAside }, { extra: className })} {...restProps}>
            {children}
        </div>
    )
}

export default Layout