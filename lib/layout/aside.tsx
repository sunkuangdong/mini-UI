import React from "react";
import { scopedClassMaker } from "../helpers/classes"

const sc = scopedClassMaker("mini-layout")

interface AsideProps extends React.HTMLAttributes<HTMLElement> { }

const Aside: React.FunctionComponent<AsideProps> = (props) => {
    const { children, className, ...restProps } = props
    return (
        <div className={sc('aside', { extra: className })} {...restProps}>
            {children}
        </div>
    )
}

export default Aside;