import React from 'react';
import ReactDOM from 'react-dom'
import Icon from "./icon"


const fn = (e: React.MouseEvent) => {
    console.log(e)
    console.log(e.currentTarget)
    console.log(e.target)
    console.log('被调用了！')
}
ReactDOM.render(<div>
    <Icon
        icon='reactSvg'
        className="my-icon"
        onClick={fn}
        onMouseEnter={() => console.log(1)}
        onMouseLeave={() => console.log(2)} />
</div>, document.querySelector("#root"))