import React, { Fragment, ReactElement } from 'react'
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
                        <footer className={sc("footer")}>
                            {buttons && buttons.map((item, index) => React.cloneElement(item, { key: index }))}
                        </footer>
                    </div>
                </Fragment>
                :
                null
        ), document.body)
    )
}

const alertDialog = function (content: string) {
    const div = document.createElement("div")
    const component = (
        <Dialog visible={true} onClose={() => {
            ReactDOM.render(React.cloneElement(component, { visible: false }), div)
            ReactDOM.unmountComponentAtNode(div)
            div.remove()
        }}>
            <strong>{content}</strong>
        </Dialog>
    )
    document.body.append(div)
    ReactDOM.render(component, div)
}
const confirmDialog = function (content: string, yes?: () => boolean, no?: () => void) {
    const onYes = () => {
        const bool = yes && yes()
        if (bool) {
            ReactDOM.render(React.cloneElement(component, { visible: false }), div)
            ReactDOM.unmountComponentAtNode(div)
            div.remove()
        }
    }
    const onNo = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
        no && no()
    }
    const div = document.createElement("div")
    const component = (
        <Dialog visible={true}
            onClose={() => onNo()}
            buttons={[
                <button onClick={onYes}>yes</button>,
                <button onClick={onNo}>no</button>]}>
            {content}
        </Dialog>
    )
    document.body.append(div)
    ReactDOM.render(component, div)
}

export { alertDialog, confirmDialog }

export default Dialog