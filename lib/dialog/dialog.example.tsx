import React, { useState } from 'react'
import Dialog from './dialog'

const DialogExample: React.FunctionComponent = () => {
    const [x, setX] = useState(false)
    return (
        <div>
            <Dialog visible={x} >
                <strong>hi</strong>
            </Dialog>
            <button onClick={() => setX(!x)}>提示消息</button>
        </div>
    )
}
export default DialogExample