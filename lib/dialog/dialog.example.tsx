import React, { Fragment, useState } from 'react'
import Dialog, { alertDialog, confirmDialog } from './dialog'

const DialogExample: React.FunctionComponent = () => {
    const [x, setX] = useState(false)
    const [y, setY] = useState(false)
    const cancel = () => {
        setX(false)
    }
    const ok = () => {
        setX(false)
    }
    const close = () => {
        setX(false)
    }
    const yes = () => {
        console.log("yes")
        return false
    }
    return (
        <div>
            <div>
                <h1>example 1</h1>
                <Dialog visible={x} buttons={[
                    <Fragment>
                        <button onClick={() => ok()}>ok</button>
                        <button onClick={() => cancel()}>cancel</button>
                    </Fragment>
                ]} onClose={() => { close() }}>
                    <strong>hi</strong>
                </Dialog>
                <button onClick={() => setX(!x)}>提示消息</button>
            </div >
            <div>
                <h1>example 2</h1>
                <Dialog visible={y} closeMask={true} buttons={[
                    <Fragment>
                        <button onClick={() => setY(!y)}>ok</button>
                        <button onClick={() => setY(!y)}>cancel</button>
                    </Fragment>
                ]} onClose={() => { setY(!y) }}>
                    <strong>hi</strong>
                </Dialog>
                <button onClick={() => setY(!y)}>提示消息</button>
            </div >
            <div>
                <h1>example 3</h1>
                <button onClick={() => alertDialog("1")}>alert</button>
                <button onClick={() => confirmDialog("1", () => yes(), () => { console.log("no") })}>confirm</button>
            </div >
        </div>
    )
}
export default DialogExample