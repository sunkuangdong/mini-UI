import React, { Fragment, ReactElement, ReactFragment, ReactNode } from 'react'
import ReactDOM from 'react-dom';
import "./dialog.scss"
import { scopedClassMaker } from "../helpers/classes"
import Icon from '../icons/icon';

interface DialogProps {
    visible: boolean
    buttons?: Array<ReactElement>
    onClose: React.MouseEventHandler
    closeMask?: boolean
}
const scopedClass = scopedClassMaker("mini-dialog")
const sc = scopedClass
const Dialog: React.FunctionComponent<DialogProps> = (props) => {
    const { visible, children, buttons, closeMask } = props
    const onClose: React.MouseEventHandler = (e) => {
        // 传递这个e单纯为了ts
        props.onClose(e)
    }
    const onClickClose: React.MouseEventHandler = (e) => {
        if (closeMask) {
            props.onClose(e)
        }
    }
    return (
        ReactDOM.createPortal((
            visible ?
                <Fragment>
                    <div className={sc("mask")} onClick={onClickClose}></div>
                    <div className={"mini-dialog"}>
                        <header className={sc("header")}>
                            提示
                            <div className={sc("close")} onClick={onClose}>
                                <Icon icon="close" />
                            </div>
                        </header>
                        <main className={sc("main")}>
                            {children}
                        </main>
                        {buttons && buttons.length &&
                            <footer className={sc("footer")}>
                                {buttons && buttons.map((item, index) => React.cloneElement(item, { key: index }))}
                            </footer>
                        }
                    </div>
                </Fragment>
                :
                null
        ), document.body)
    )
}


// 优化 alertDialog confirmDialog modalDialog
const publishFunction = (content: ReactNode | ReactFragment, buttons?: Array<ReactElement>) => {
    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const div = document.createElement("div")
    const component = (
        <Dialog visible={true} onClose={onClose} buttons={buttons}>
            <strong>{content}</strong>
        </Dialog>
    )
    document.body.append(div)
    ReactDOM.render(component, div)
    return onClose;
}
const alertDialog = function (content: ReactNode | ReactFragment) {
    const buttons = [<button onClick={() => close()}>ok</button>]
    const close = publishFunction(content, buttons)
}
const confirmDialog = function (content: ReactNode | ReactFragment, yes?: () => boolean, no?: () => void) {
    const onYes = () => {
        const bool = yes && yes()
        if (bool) {
            close()
        }
    }
    const onNo = () => {
        no && no()
        close()
    }
    const buttons = [
        <button onClick={onYes}>yes</button>,
        <button onClick={onNo}>no</button>
    ]
    const close = publishFunction(content, buttons)
}
const modalDialog = function (content: ReactNode | ReactFragment, buttons?: Array<ReactElement>) {
    const close = publishFunction(content, buttons)
    return close
}

export { alertDialog, confirmDialog, modalDialog }

export default Dialog