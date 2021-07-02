import React from 'react'
import { alertDialog, confirmDialog, modalDialog } from './dialog'

const DialogExample3: React.FunctionComponent = () => {
    const yes1 = () => {
        console.log("yes1")
        return false
    }
    const yes2 = () => {
        console.log("yes2")
        return false
    }
    const openModal1 = function () {
        function bool() {
            if (yes2()) {
                onNo()
            }
        }
        const onNo = modalDialog(
            <strong>
                你好
                <button onClick={() => bool()}>这是用户的button</button>
            </strong>,
            [<button onClick={() => bool()}>ok</button>, <button onClick={() => onNo()}>no</button>]
        )
    }
    const openModal2 = function () {
        function bool() {
            if (yes2()) {
                onNo()
            }
        }
        const onNo = modalDialog(
            <strong>
                你好
                <button onClick={() => bool()}>这是用户的button</button>
            </strong>,
        )
    }
    return (
        <div>
            <div>
                <h2>简洁用法</h2>
                <button onClick={() => alertDialog("1")}>alert</button>
                <button onClick={() => confirmDialog("1", () => yes1(), () => { console.log("no") })}>confirm</button>
                <button onClick={openModal1}>modal1</button>
                <button onClick={openModal2}>modal2</button>
            </div >
        </div >
    )
}
export default DialogExample3
