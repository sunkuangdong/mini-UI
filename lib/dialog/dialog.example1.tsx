import React, { useState } from 'react'
import Dialog from './dialog'

const DialogExample1: React.FunctionComponent = () => {
    const [x, setX] = useState(false)
    const close = () => {
        setX(false)
    }
    return (
        <div>
            <div>
                <h2>基础用法</h2>
                <Dialog visible={x} onClose={() => { close() }}>
                    <strong>hi</strong>
                </Dialog>
                <button onClick={() => setX(!x)}>提示消息</button>
            </div >
        </div >
    )
}
export default DialogExample1
