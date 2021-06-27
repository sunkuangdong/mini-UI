import React, { Fragment } from 'react'
import "./dialog.scss"
import { scopedClassMaker } from "../helpers/classes"
import Icon from '../icons/icon';

interface DialogProps {
    visible: boolean
}
const scopedClass = scopedClassMaker("mini-dialog")
const sc = scopedClass
const Dialog: React.FunctionComponent<DialogProps> = (props) => {
    const { visible, children } = props
    return (
        visible ?
            <Fragment>
                <div className={sc("mask")}></div>
                <div className={"mini-dialog"}>
                    <header className={sc("header")}>
                        提示
                        <div className={sc("close")}>
                            <Icon icon="close" />
                        </div>
                    </header>
                    <main className={sc("main")}>
                        {children}
                    </main>
                    <footer className={sc("footer")}>
                        <button>ok</button>
                        <button>cancel</button>
                    </footer>
                </div>
            </Fragment>
            :
            null
    )
}

export default Dialog