import React, { useState } from "react"
import Icon from "./lib/icons/icon"
import Highlight, { defaultProps } from "prism-react-renderer"

interface Props {
    code: string
}

const Demo: React.FunctionComponent<Props> = (props) => {
    const [codeVisible, setCodeVisible] = useState(false)
    const code = (
        <Highlight {...defaultProps} code={props.code} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    )
    return (
        <div>
            {props.children}
            <div>
                {!codeVisible && <Icon icon="merge" onClick={() => setCodeVisible(!codeVisible)}></Icon>}
                {codeVisible && <Icon icon="unFold" onClick={() => setCodeVisible(!codeVisible)}></Icon>}
                {codeVisible && code}
            </div>
        </div>
    )
}

export default Demo