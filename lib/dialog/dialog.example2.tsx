import React, { Fragment, useState } from 'react'
import Dialog from './dialog'

const DialogExample2: React.FunctionComponent = () => {
    const [y, setY] = useState(false)
    return (
        <div>
            <div>
                <h2>可嵌套表单</h2>
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
        </div >
    )
}
export default DialogExample2
