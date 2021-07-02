import React from "react";
import Demo from "../../demo";
import DialogExample1 from "./dialog.example1"
import DialogExample2 from "./dialog.example2"
import DialogExample3 from "./dialog.example3"

const DialogDemo = () => (
    <>
        <Demo code={require("!!raw-loader!./dialog.example1").default}>
            <DialogExample1></DialogExample1>
        </Demo>
        <Demo code={require("!!raw-loader!./dialog.example2").default}>
            <DialogExample2></DialogExample2>
        </Demo>
        <Demo code={require("!!raw-loader!./dialog.example3").default}>
            <DialogExample3></DialogExample3>
        </Demo>
    </>
)

export default DialogDemo